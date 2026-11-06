import { useEffect, useRef, useState } from 'react'
import { demoTracks } from './model'
import { loadTracks, saveTrack, removeTrack } from './library'
export function useAudioLibrary(onPlaying) {
 const [tracks,setTracks]=useState(demoTracks)
 const [active,setActive]=useState(null)
 const [playing,setPlaying]=useState(false)
 const [time,setTime]=useState(0)
 const [duration,setDuration]=useState(0)
 const [volume,setVolume]=useState(.6)
 const [error,setError]=useState('')
 const [recent,setRecent]=useState([])
 const [repeat,setRepeat]=useState(false)
 const [shuffle,setShuffle]=useState(false)
 const audio=useRef(null), urls=useRef([]), current=useRef(null), graph=useRef(null), tones=useRef({bass:0,treble:0})
 useEffect(()=>{
  const lifecycle={cancelled:false}
  loadTracks().then(items=>{
   if(lifecycle.cancelled)return
   const saved=items.map(t=>{const src=URL.createObjectURL(t.file);urls.current.push(src);return {...t,src}})
   setTracks(prev=>[...prev,...saved])
  }).catch(()=>{if(!lifecycle.cancelled)setError('Pamięć przeglądarki jest niedostępna. Dodane pliki będą dostępne w tej sesji.')})
  return()=>{lifecycle.cancelled=true}
 },[])
 useEffect(()=>()=>{urls.current.forEach(URL.revokeObjectURL);graph.current?.context.close().catch(()=>{})},[])
 const play=track=>{
  if(!track)return
  setError('');current.current=track;setActive(track)
  if(audio.current.src!==new URL(track.src,location.href).href){audio.current.src=track.src;setTime(0);setDuration(0)}
  if(!graph.current&&window.AudioContext){
   const context=new AudioContext()
   const bass=context.createBiquadFilter(),treble=context.createBiquadFilter()
   bass.type='lowshelf';bass.frequency.value=200;bass.gain.value=tones.current.bass*2
   treble.type='highshelf';treble.frequency.value=3000;treble.gain.value=tones.current.treble*2
   const source=context.createMediaElementSource(audio.current)
   source.connect(bass);bass.connect(treble);treble.connect(context.destination)
   graph.current={context,bass,treble}
  }
  graph.current?.context.resume().catch(()=>{})
  audio.current.volume=volume
  audio.current.play().catch(()=>{setPlaying(false);setError('Nie można odtworzyć tego pliku. Spróbuj MP3, WAV, OGG lub M4A obsługiwanego przez przeglądarkę.')})
 }
 const toggle=()=>{if(!active)return; if(audio.current.paused)play(active);else audio.current.pause()}
 const next=(offset=1)=>{
  if(!tracks.length)return
  const index=tracks.findIndex(t=>t.id===current.current?.id)
  const newIndex=shuffle?Math.floor(Math.random()*tracks.length):(index+offset+tracks.length)%tracks.length
  play(tracks[newIndex])
 }
 const importFiles=async files=>{
  let failed=0
  for(const file of files){
   if(!(/\.(mp3|wav|ogg|m4a|aac|flac|webm)$/i.test(file.name)||file.type.startsWith('audio/'))||file.size>60*1024*1024){failed++;continue}
   const parts=file.name.replace(/\.[^.]+$/,'').split(' - ')
   const track={id:crypto.randomUUID(),title:parts.length>1?parts.slice(1).join(' - '):parts[0],artist:parts.length>1?parts[0]:'Własny plik',album:'Moja muzyka',genre:'Własne pliki',file,plays:0}
   const src=URL.createObjectURL(file);urls.current.push(src);setTracks(prev=>[...prev,{...track,src}])
   try{await saveTrack(track)}catch{setError('Plik dodano do sesji, ale nie udało się zapisać go na kolejne uruchomienie.')}
  }
  if(failed)setError(`Pominięto ${failed} plików: wymagany jest format audio i rozmiar do 60 MB.`)
 }
 const deleteTrack=async id=>{
  if(current.current?.id===id){audio.current.pause();audio.current.removeAttribute('src');audio.current.load();current.current=null;setActive(null);setTime(0);setDuration(0)}
  setTracks(prev=>prev.filter(t=>t.id!==id))
  try{await removeTrack(id)}catch{setError('Usunięto plik z sesji. Nie udało się zaktualizować pamięci przeglądarki.')}
 }
 const audioElement=<audio ref={audio} onPlaying={()=>{setPlaying(true);const track=current.current;if(track){setRecent(prev=>[track.id,...prev.filter(id=>id!==track.id)]);setTracks(prev=>prev.map(t=>t.id===track.id?{...t,plays:t.plays+1}:t));onPlaying(track)}}} onPause={()=>setPlaying(false)} onTimeUpdate={()=>setTime(audio.current.currentTime)} onLoadedMetadata={()=>setDuration(audio.current.duration)} onEnded={()=>repeat?play(current.current):next()} onError={()=>{setPlaying(false);setError('Nie udało się wczytać dźwięku. Wybierz inny plik lub dodaj go ponownie.')}}/>
 return {tracks,active,playing,time,duration,volume,error,recent,repeat,shuffle,play,toggle,next,importFiles,deleteTrack,audioElement,setRepeat,setShuffle,setTone:(key,value)=>{tones.current[key]=value;if(graph.current)graph.current[key].gain.value=value*2},seek:value=>{if(Number.isFinite(audio.current.duration)){audio.current.currentTime=Number(value);setTime(Number(value))}},changeVolume:value=>{setVolume(Number(value));audio.current.volume=Number(value)}}
}
