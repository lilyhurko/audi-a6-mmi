import { useState } from 'react'
import VehicleMenuIcon from './VehicleMenuIcon'

export default function SeatSettings({details=false,onDetails,onMain}) {
 const [side,setSide]=useState(0),[tab,setTab]=useState(0),[page,setPage]=useState(0)
 const [positions,setPositions]=useState([{back:0,height:0,lumbar:0},{back:0,height:0,lumbar:0}])
 const [easy,setEasy]=useState([true,false])
 const [notice,setNotice]=useState('')
 const adjust=(key,delta)=>{
  const next=Math.max(-5,Math.min(5,positions[side][key]+delta))
  setPositions(old=>old.map((value,index)=>index===side?{...value,[key]:next}:value))
  setNotice(`${side?'Fotel pasażera':'Fotel kierowcy'} · ${key==='back'?'Oparcie':key==='height'?'Wysokość':'Podparcie lędźwiowe'}: ${next}`)
 }
 if(details)return <section className="seat-further-settings" aria-label="Dalsze ustawienia fotela">
  <div className="settings-scroll"><button className="setting-row" onClick={()=>{setPositions([{back:0,height:0,lumbar:0},{back:0,height:0,lumbar:0}]);setNotice('Zresetowano położenie obu foteli.')}}>Resetuj położenie fotela</button>{['kierowcy','pasażera'].map((label,index)=><button key={label} className="setting-row" role="switch" aria-checked={easy[index]} onClick={()=>setEasy(old=>old.map((value,i)=>i===index?!value:value))}>Udogodnienie wsiadania na fotel {label}<span className={`toggle ${easy[index]?'on':''}`}/></button>)}<p className="setting-note" role="status">{notice}</p></div>
  <div className="page-dots seat-pages"><button aria-label="Ustawienie fotela" onClick={onMain}><i/></button><button aria-label="Dalsze ustawienia fotela" aria-current="page"><i className="current"/></button></div>
 </section>
 return <section className="seat-settings" aria-label="Regulacja fotela">
  <nav className="seat-tabs" aria-label="Rodzaj regulacji">{['Ustawienie fotela','Podparcie lędźwiowe'].map((label,index)=><button key={label} aria-label={label} aria-pressed={tab===index} className={tab===index?'selected':''} onClick={()=>{setTab(index);setNotice('')}}><VehicleMenuIcon name="seats"/>{index===1&&<span className="lumbar-mark">≋</span>}</button>)}</nav>
  <div className="seat-selection" aria-label="Wybierz fotel">{['Fotel kierowcy','Fotel pasażera'].map((label,index)=><button key={label} aria-label={label} aria-pressed={side===index} className={side===index?'selected':''} onClick={()=>{setSide(index);setNotice('')}}><VehicleMenuIcon name="seats"/></button>)}</div>
  <div className={`seat-adjustment-art ${side?'passenger':''}`}>
   <svg viewBox="735 360 345 370" aria-hidden="true"><image href="/images/mmi-seat-reference.jpg" width="2048" height="1536"/></svg>
   <button className="seat-arrow back-out" aria-label={tab?'Zmniejsz podparcie lędźwiowe':'Odchyl oparcie'} onClick={()=>adjust(tab?'lumbar':'back',-1)}/>
   <button className="seat-arrow back-in" aria-label={tab?'Zwiększ podparcie lędźwiowe':'Wyprostuj oparcie'} onClick={()=>adjust(tab?'lumbar':'back',1)}/>
   <button className="seat-arrow seat-up" aria-label="Podnieś fotel" onClick={()=>adjust('height',1)}/>
   <button className="seat-arrow seat-down" aria-label="Opuść fotel" onClick={()=>adjust('height',-1)}/>
  </div>
  <button className="seat-next" aria-label="Następna strona regulacji fotela" onClick={()=>{setNotice('');onDetails()}}>›</button>
  <div className="seat-feedback" role="status">{notice}</div>
  <div className="page-dots seat-pages">{[0,1].map(index=><button key={index} aria-label={`Strona ${index+1} regulacji fotela`} aria-pressed={page===index} onClick={()=>{setPage(index);if(index===1){setNotice('');onDetails()}}}><i className={page===index?'current':''}/></button>)}</div>
 </section>
}
