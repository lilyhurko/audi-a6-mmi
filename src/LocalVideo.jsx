import {useEffect,useState} from 'react'
export default function LocalVideo(){
 const [clip,setClip]=useState(null)
 useEffect(()=>()=>{if(clip)URL.revokeObjectURL(clip.url)},[clip])
 return <div className="local-video"><label className="media-file-action">Dodaj film<input type="file" accept="video/*" aria-label="Dodaj film" onChange={e=>{const file=e.target.files[0];if(file)setClip({name:file.name,url:URL.createObjectURL(file)});e.target.value=''}}/></label>{clip?<video controls src={clip.url} aria-label={clip.name}/>:<p>Wybierz plik wideo z urządzenia.</p>}</div>
}
