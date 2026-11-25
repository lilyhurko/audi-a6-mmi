import {useState} from 'react'
import Icon from './Icons'
import './SeatVersionB.css'
const initial=()=>({back:0,slide:0,height:0,easy:false})
export default function SeatVersionB({onBack,onHome,onChange}) {
 const [side,setSide]=useState(0),[seats,setSeats]=useState(()=>[initial(),initial()]),[expanded,setExpanded]=useState(null)
 const value=seats[side]
 const change=(key,delta)=>{const next=typeof delta==='boolean'?delta:Math.max(-5,Math.min(5,value[key]+delta));setSeats(old=>old.map((seat,index)=>index===side?{...seat,[key]:next}:seat));onChange?.({side:side?'passenger':'driver',setting:key,value:next})}
 const steps=key=><div className="b-seat-stepper"><button disabled={value[key]<=-5} aria-label={key==='slide'?'Przesuń fotel do tyłu':'Opuść fotel'} onClick={()=>change(key,-1)}>{key==='slide'?'← Do tyłu':'↓ Niżej'}</button><output aria-live="polite">{value[key]}</output><button disabled={value[key]>=5} aria-label={key==='slide'?'Przesuń fotel do przodu':'Podnieś fotel'} onClick={()=>change(key,1)}>{key==='slide'?'→ Do przodu':'↑ Wyżej'}</button></div>
 return <section className="b-seat" aria-label="Ustawienia fotela wersja B">
  <header><button aria-label="Wstecz" onClick={onBack}><Icon name="back"/></button><h1>Ustawienia fotela</h1><button aria-label="Wróć do menu głównego" onClick={onHome}><Icon name="home"/></button></header>
  <div className="b-seat-tabs" aria-label="Wybór fotela">{['Kierowca','Pasażer'].map((name,index)=><button key={name} aria-pressed={side===index} onClick={()=>setSide(index)}>{name}</button>)}</div>
  <section className="b-seat-card"><h2>Oparcie <Icon name="seat"/></h2><div className="b-seat-actions"><button aria-label="Do tyłu" disabled={value.back<=-5} onClick={()=>change('back',-1)}><span>←</span>Do tyłu</button><button aria-label="Do przodu" disabled={value.back>=5} onClick={()=>change('back',1)}><span>→</span>Do przodu</button></div><output className="b-seat-value" aria-live="polite">Pozycja oparcia: {value.back}</output></section>
  <section className="b-seat-card"><h2>Siedzisko</h2><div className="b-seat-actions"><button aria-label="Przesuwanie" aria-expanded={expanded==='slide'} onClick={()=>setExpanded(expanded==='slide'?null:'slide')}><span>⇆</span>Przesuwanie</button><button aria-label="Wysokość" aria-expanded={expanded==='height'} onClick={()=>setExpanded(expanded==='height'?null:'height')}><span>↑↓</span>Wysokość</button></div>{['slide','height'].includes(expanded)&&steps(expanded)}</section>
  <section className="b-seat-card b-seat-easy"><div className="b-seat-easy-heading"><strong>Ułatwione wsiadanie</strong><button aria-label="Ustawienia ułatwionego wsiadania" aria-expanded={expanded==='easy'} onClick={()=>setExpanded(expanded==='easy'?null:'easy')}>Ustawienia</button></div>{expanded==='easy'&&<div className="b-seat-easy-options"><span>Automatyczne odsunięcie fotela</span><button role="switch" aria-label="Ułatwione wsiadanie" aria-checked={value.easy} onClick={()=>change('easy',!value.easy)}>{value.easy?'Włączone':'Wyłączone'}<span className={`toggle ${value.easy?'on':''}`}/></button></div>}</section>
 </section>
}
