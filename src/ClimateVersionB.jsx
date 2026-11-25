import {useState} from 'react'
import Icon from './Icons'
import './ClimateVersionB.css'
export default function ClimateVersionB({value,onChange,units='°C'}) {
 const [panel,setPanel]=useState(null)
 const temp=t=>(units==='°F'?t*9/5+32:t).toFixed(1).replace('.',',')+units
 const adjust=(side,delta)=>onChange({[side]:Math.max(16,Math.min(28,value[side]+delta)),power:true})
 const toggle=(key,label)=><button className="b-climate-option" aria-pressed={Boolean(value[key])} onClick={()=>onChange({[key]:!value[key]})}>{label}<span>{value[key]?'Włączone':'Wyłączone'}</span></button>
 return <section className="lower-screen b-climate" aria-label="Panel klimatyzacji wersja B">
  <header>{panel&&<button aria-label="Wróć do temperatury" onClick={()=>setPanel(null)}>←</button>}<h2>{panel==='fan'?'Nawiew':panel==='ac'?'Klimatyzacja · A/C':panel==='seats'?'Komfort foteli':'Klimatyzacja'}</h2><button className="b-climate-auto" aria-label="Automatyczna klimatyzacja" aria-pressed={value.autoLeft&&value.autoRight} onClick={()=>onChange({autoLeft:!(value.autoLeft&&value.autoRight),autoRight:!(value.autoLeft&&value.autoRight),power:true})}>AUTO</button></header>
  {!panel?<><div className="b-temperature-zones">{[['left','Kierowca'],['right','Pasażer']].map(([side,label])=><div className="b-temperature-zone" key={side}><h3>{label}</h3><output aria-live="polite" aria-label={`Temperatura: ${label}`}>{temp(value[side])}</output><div><button aria-label={`${label}: zmniejsz temperaturę`} disabled={value[side]<=16} onClick={()=>adjust(side,-.5)}>−</button><button aria-label={`${label}: zwiększ temperaturę`} disabled={value[side]>=28} onClick={()=>adjust(side,.5)}>+</button></div></div>)}</div><nav className="b-climate-nav" aria-label="Dodatkowe ustawienia klimatyzacji"><button onClick={()=>setPanel('fan')}><Icon name="climate"/>Nawiew</button><button onClick={()=>setPanel('ac')}><span aria-hidden="true">❄</span>A/C</button><button onClick={()=>setPanel('seats')}><Icon name="seat"/>Fotele</button></nav></>:<div className="b-climate-details">
  {panel==='fan'&&<>{toggle('power','Nawiew')}<label>Siła nawiewu: {value.fan}<input aria-label="Siła nawiewu" type="range" min="1" max="7" value={value.fan} onChange={e=>onChange({fan:Number(e.target.value),power:true})}/></label><div className="b-climate-directions">{[['face','Twarz'],['feet','Nogi'],['windshield','Szyba']].map(([key,label])=><button key={key} aria-pressed={value.direction===key} onClick={()=>onChange({direction:key,power:true})}>{label}</button>)}</div></>}
  {panel==='ac'&&<>{toggle('ac','A/C')}{toggle('max','Maksymalne chłodzenie')}{toggle('sync','Synchronizacja temperatur')}{toggle('recirculation','Obieg zamknięty')}</>}
  {panel==='seats'&&[['left','Kierowca'],['right','Pasażer']].map(([side,label])=><div className="b-climate-seat" key={side}><h3>{label}</h3>{[['Heat','Ogrzewanie'],['Vent','Wentylacja']].map(([suffix,text])=><button key={suffix} aria-label={`${text} fotela: ${label}`} onClick={()=>onChange({[side+suffix]:(value[side+suffix]+1)%4})}>{text}<span>{value[side+suffix]} / 3</span></button>)}</div>)}
  </div>}
 </section>
}
