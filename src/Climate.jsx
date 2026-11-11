import { Seat } from './Graphics'
import Icon from './Icons'
export function ClimatePanel({value,onChange,open,onKeyboard,keyboard,query,setQuery,units='°C'}){
 const displayTemp=t=>(units==='°F'?t*9/5+32:t).toFixed(1).split('.')
 const [leftInt,leftDecimal]=displayTemp(value.left),[rightInt,rightDecimal]=displayTemp(value.right)
 const temperature=(side,delta)=>onChange({[side]:Math.max(16,Math.min(28,value[side]+delta))})
 if(keyboard)return <section className="lower-screen keyboard-screen" aria-label="Klawiatura ekranowa"><div className="keyboard-top"><button onClick={onKeyboard} aria-label="Zamknij klawiaturę">×</button><span>PL</span><span>{query||'Wpisz szukaną frazę'}</span></div>{['1234567890','QWERTYUIOP','ASDFGHJKL','ZXCVBNM'].map((row,i)=><div className="keyboard-row" key={i}>{[...row].map(k=><button key={k} onClick={()=>setQuery(query+k)}>{k}</button>)}</div>)}<div className="keyboard-row keyboard-bottom"><button onClick={()=>setQuery('')}>Wyczyść</button><button onClick={()=>setQuery(query+' ')}>Spacja</button><button aria-label="Usuń ostatni znak" onClick={()=>setQuery(query.slice(0,-1))}>⌫</button></div></section>
 return <section className="lower-screen" aria-label="Panel klimatyzacji">
  <div className="shortcut-strip"><span/><span/><button aria-label="Tryb AUTO obu stref" className={value.autoLeft&&value.autoRight?'active':''} onClick={()=>onChange({autoLeft:!value.autoLeft,autoRight:!value.autoLeft})}>Ⓐ<small>AUTO</small></button><button aria-label="Siła nawiewu" onClick={()=>open('climate-settings')}>▱▱▱▱</button><button aria-label="Otwórz klimatyzację" onClick={()=>open('climate')}>▣</button><button aria-label="Włącz lub wyłącz nawiew" onClick={()=>onChange({power:!value.power})}>⏻</button><span/><span/></div>
  <div className={`climate-body ${!value.power?'climate-powered-off':''}`}>
   {value.power?<><div className="temperature left-temp"><strong>{leftInt}</strong><span><b>{units}</b><b>.{leftDecimal}</b></span></div><div className="temperature right-temp"><strong>{rightInt}</strong><span><b>{units}</b><b>.{rightDecimal}</b></span></div><div className="temp-control left-control"><button aria-label="Kierowca: zwiększ temperaturę" onClick={()=>temperature('left',.5)}>+</button><button aria-label="Kierowca: zmniejsz temperaturę" onClick={()=>temperature('left',-.5)}>−</button></div><div className="temp-control right-control"><button aria-label="Pasażer: zwiększ temperaturę" onClick={()=>temperature('right',.5)}>+</button><button aria-label="Pasażer: zmniejsz temperaturę" onClick={()=>temperature('right',-.5)}>−</button></div><Seat/><Seat mirror/><div className="airflow"><button aria-label="Nawiew na twarz" className={value.direction==='face'?'air-active':''} onClick={()=>onChange({direction:'face'})}><Icon name="seat"/></button><button aria-label="Ustaw siłę nawiewu" onClick={()=>open('climate-settings')}><Icon name="climate"/></button><button aria-label="Nawiew na nogi" className={value.direction==='feet'?'air-active':''} onClick={()=>onChange({direction:'feet'})}><Icon name="seat"/></button></div><div className="auto-controls"><button className={value.autoLeft?'active':''} onClick={()=>onChange({autoLeft:!value.autoLeft})}>AUTO</button><button className={value.autoRight?'active':''} onClick={()=>onChange({autoRight:!value.autoRight})}>AUTO</button></div></>:<><Seat/><Seat mirror/><button className="climate-enable" onClick={()=>onChange({power:true})}>Włącz klimatyzację<span>⏻</span></button></>}
  </div>
  <div className="climate-bottom">{[
   ['leftHeat','Ogrzewanie fotela kierowcy',<Icon key="seat-heat" name="seatHeat"/>],['leftVent','Wentylacja fotela kierowcy',<Icon key="seat-vent" name="seatVent"/>],['ac','A/C','A/C'],['max','A/C MAX',<>A/C<small>MAX</small></>],['more','Więcej ustawień klimatyzacji','•••'],['power','OFF','OFF'],['recirculation','Obieg zamknięty',<Icon key="recirculation" name="recirculation"/>],['rightVent','Wentylacja fotela pasażera',<Icon key="seat-vent" name="seatVent"/>],['rightHeat','Ogrzewanie fotela pasażera',<Icon key="seat-heat" name="seatHeat"/>],
  ].map(([key, label, icon]) => {
   const hasLevels = ['leftHeat', 'rightHeat', 'leftVent', 'rightVent'].includes(key)
   const isActive = key === 'power' ? !value.power : Boolean(value[key])
   const level = hasLevels ? value[key] : 0

   function handleClick() {
    if (key === 'more') {
     open('climate')
    } else if (hasLevels) {
     onChange({ [key]: (level + 1) % 4 })
    } else {
     onChange({ [key]: !value[key] })
    }
   }

   return (
    <button
     key={key}
     aria-label={label}
     aria-description={hasLevels ? `Poziom ${level} z 3` : undefined}
     aria-pressed={key === 'more' ? undefined : isActive}
     className={!hasLevels && isActive ? 'active' : undefined}
     onClick={handleClick}
    >
     {icon}
     {hasLevels && (
      <span className={`seat-levels ${key.endsWith('Vent') ? 'seat-levels-cool' : ''}`} aria-hidden="true">
       {[1, 2, 3].map(step => <span key={step} className={step <= level ? 'lit' : undefined}/>)}
      </span>
     )}
    </button>
   )
  })}</div>
 </section>
}
