import Icon from './Icons'
import './AccessibleVersion.css'

// Wersja B jest autorskim projektem uniwersalnym, a nie odwzorowaniem oryginalnego MMI.
export default function AccessibleVersion({screen, go, back, scenario, library, climate, updateClimate, finish}) {
 const track=library.tracks.find(item=>item.id==='demo-night')
 const beginAudio=()=>{
   if(!track)return
   go('player')
   library.play(track)
 }
 const route=()=>{
   go('nav-preview')
 }
 const finishRoute=()=>{
   if(scenario?.id==='S2')finish({destination:'Centrum Nauki'})
   else go('navigation')
 }
 const temp=climate.left
 return <div className="accessible-screen">
   <div className="accessible-top">
     <strong>MMI · Wersja B</strong>
     <span>Projekt uniwersalny</span>
   </div>
   {screen!=='home'&&<button className="accessible-back" onClick={back} data-aoi="AOI_wstecz">← Wstecz</button>}
   <div className="accessible-content">
    {screen==='home'&&<>
      <h1>Co chcesz zrobić?</h1>
      <div className="accessible-grid">
       <button onClick={()=>go('frequent')}><Icon name="media"/> Muzyka</button>
       <button onClick={()=>go('navigation')}><Icon name="navigation"/> Nawigacja</button>
       <button onClick={()=>go('climate')}><Icon name="climate"/> Klimatyzacja</button>
      </div>
    </>}
    {screen==='frequent'&&<>
      <h1>Odtwarzaj muzykę</h1>
      <p>Najczęściej odtwarzane</p>
      <button className="accessible-action" onClick={beginAudio} data-aoi="AOI_cel" disabled={!track}>▶ Nocna trasa</button>
      {!track&&<p>Brak nagrania demonstracyjnego.</p>}
    </>}
    {screen==='player'&&<>
      <h1>Odtwarzanie</h1>
      <p>{library.active?.title||'Nocna trasa'}</p>
      <button className="accessible-action" onClick={()=>library.toggle()}>{library.playing?'Wstrzymaj':'Odtwarzaj'}</button>
    </>}
    {screen==='navigation'&&<>
      <h1>Dokąd jedziemy?</h1>
      <p>Wybierz miejsce docelowe</p>
      <button className="accessible-action" onClick={route} data-aoi="AOI_cel"><Icon name="navigation"/> Centrum Nauki</button>
    </>}
    {screen==='nav-preview'&&<>
      <h1>Potwierdź trasę</h1>
      <p>Cel: Centrum Nauki</p>
      <button className="accessible-action" onClick={finishRoute} data-aoi="AOI_cel">Rozpocznij prowadzenie</button>
    </>}
    {screen==='climate'&&<>
      <h1>Ustaw temperaturę</h1>
      <div className="accessible-temp">
       <button onClick={()=>updateClimate({left:Math.max(16,temp-1),power:true})} aria-label="Zmniejsz temperaturę">−</button>
       <output aria-live="polite">{temp}°C</output>
       <button onClick={()=>updateClimate({left:Math.min(28,temp+1),power:true})} aria-label="Zwiększ temperaturę" data-aoi="AOI_cel">+</button>
      </div>
      <button className="accessible-action" aria-pressed={climate.sync} data-aoi="AOI_cel" onClick={()=>updateClimate({sync:!climate.sync,power:true})}>Synchronizacja temperatury: {climate.sync?'Włączona':'Wyłączona'}</button>
      <p>Ustaw 22°C i włącz synchronizację, aby wykonać zadanie.</p>
    </>}
   </div>
 </div>
}
