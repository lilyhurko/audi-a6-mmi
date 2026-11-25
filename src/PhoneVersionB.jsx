import {useState} from 'react'
import Icon from './Icons'
import './PhoneVersionB.css'

export default function PhoneVersionB({contacts,favorites,onFavorite,onCall,onBack,onHome,query,setQuery,onSearchFocus,onSearchDone,onSettings}) {
 const [tab,setTab]=useState(null),[selected,setSelected]=useState(null)
 const normalized=query.toLocaleLowerCase('pl').trim()
 const list=contacts.filter(c=>(tab!=='favorites'||favorites.includes(c.name))&&(c.name.toLocaleLowerCase('pl').includes(normalized)||c.number.replaceAll(' ','').includes(normalized.replaceAll(' ',''))))
 const number=query.replace(/[\s()-]/g,'')
 const direct=/^\+?\d{3,15}$/.test(number)?{name:query,number}:null
 return <section className="b-phone" aria-label="Telefon wersja B">
  <header><button aria-label="Wstecz" onClick={onBack}><Icon name="back"/></button><h1>Telefon</h1><button aria-label="Ustawienia telefonu" onClick={onSettings}><Icon name="settings"/></button><button aria-label="Wróć do menu głównego" onClick={onHome}><Icon name="home"/></button></header>
  <label className="b-phone-search"><Icon name="search"/><input aria-label="Wyszukaj kontakt lub numer" placeholder="Wyszukaj kontakt lub numer" value={query} onFocus={onSearchFocus} onChange={e=>setQuery(e.target.value)}/></label>
  <div className="b-phone-tabs"><button aria-pressed={tab==='contacts'} onClick={()=>setTab(tab==='contacts'?null:'contacts')}><Icon name="user"/>Kontakty</button><button aria-pressed={tab==='favorites'} onClick={()=>setTab(tab==='favorites'?null:'favorites')}><Icon name="star"/>Ulubione</button></div>
  {(tab||query)&&<div className="b-phone-results" aria-label="Lista kontaktów">{list.map(c=><div key={c.number}><button className="b-phone-contact" aria-pressed={selected?.number===c.number} onClick={()=>{setSelected(c);setTab(null);setQuery('');onSearchDone()}}><Icon name="user"/><span>{c.name}<small>{c.number}</small></span></button><button aria-label={`${favorites.includes(c.name)?'Usuń':'Dodaj'} ${c.name} ${favorites.includes(c.name)?'z ulubionych':'do ulubionych'}`} aria-pressed={favorites.includes(c.name)} onClick={()=>onFavorite(c.name)}>{favorites.includes(c.name)?'★':'☆'}</button></div>)}{!list.length&&!direct&&<p>{tab==='favorites'?'Brak ulubionych kontaktów. Dodaj je gwiazdką na liście kontaktów.':'Nie znaleziono kontaktu.'}</p>}{direct&&<button className="b-phone-contact" onClick={()=>{setSelected(direct);setQuery('');setTab(null);onSearchDone()}}>Wybierz numer {query}</button>}</div>}
  <div className="b-phone-selected"><Icon name="user"/><div><strong>{selected?.name||'Wybrany kontakt'}</strong><small>{selected?`${selected.number} · Gotowy do połączenia`:'Wybierz kontakt lub wpisz numer'}</small></div><button className="b-phone-call" aria-label={selected?`Połącz z ${selected.name}`:'Połącz'} disabled={!selected} onClick={()=>onCall(selected)}><Icon name="phone"/></button></div>
 </section>
}
