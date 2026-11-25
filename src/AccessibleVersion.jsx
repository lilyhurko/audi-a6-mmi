import Icon from './Icons'
import { TileArt, Car } from './Graphics'
import { ambientColors, radioStations, destinations } from './model'
import './AccessibleVersion.css'

// Wersja B zachowuje estetykę MMI, ale upraszcza konkretne ścieżki badawcze.
export default function AccessibleVersion({screen,go,back,ambientColor,setAmbientColor,radioFavorites,toggleRadioFavorite,query,setQuery,onRoute}) {
 const navigationTarget=destinations.find(place=>place.id==='science')
 const home=[['radio','RADIO','radio'],['media','MEDIA','media'],['phone','TELEFON','phone'],['navigation','NAWIGACJA','navigation'],['connection','PHONE APPS','navigation'],['vehicle','POJAZD','vehicle'],['favorites','ULUBIONE','star'],['settings','USTAWIENIA','settings']]
 const title={
  vehicle:'Samochód',lights:'Światła i widoczność','ambient-lighting':'Oświetlenie ambiente',
  radio:'Radio',navigation:'Nawigacja','nav-search':'Wyszukiwanie celu','nav-preview':'Wybór celu',
  favorites:'Ulubione'
 }
 const goHome=()=>go('home')
 const allStations=radioStations.filter(s=>s.name.toLocaleLowerCase('pl').includes(query.toLocaleLowerCase('pl')))
 return <div className="screen-main b-mmi">
  {screen!=='home'&&<header className="screen-heading">
    <button aria-label="Wstecz" data-aoi="AOI_wstecz" onClick={back}><Icon name="back"/></button>
    <div><span>{['vehicle','lights','ambient-lighting'].includes(screen)?'Samochód':screen==='radio'||screen==='favorites'?'Radio':'Nawigacja'}</span><h1>{title[screen]||'Menu'}</h1></div>
    <button aria-label="Menu główne" onClick={goHome}><Icon name="home"/></button>
  </header>}
  <div className={`screen-body ${screen==='home'?'no-heading':''}`}>
    {screen==='home'&&<><div className="icon-grid home-grid">{home.map(([path,label,icon])=>
      <button className={`mmi-tile home-${path}`} key={path} onClick={()=>go(path)}><TileArt name={icon}/><span><Icon name={icon}/>{label}</span></button>
    )}</div><div className="page-dots"><i/><i className="current"/><i/></div></>}
    {screen==='vehicle'&&<div className="icon-grid">{[
      ['drive','Audi drive select','vehicle'],['assistance','Asystent wydajności','settings'],['seats','Fotele','phone'],
      ['climate','Klimatyzacja','climate'],['lights','Światła i widoczność','radio'],
      ['parking','Sygnalizacja parkowania','vehicle'],['assistance','Asysta kierowcy','vehicle'],['maintenance','Ustawienia i serwis','settings']
    ].map(([path,label,icon],i)=><button key={i} className="mmi-tile" onClick={()=>go(path)}><Icon name={icon}/><span>{label}</span></button>)}</div>}
    {screen==='lights'&&<div className="lights-view b-lights"><div>
      <button className="setting-row" onClick={()=>go('ambient-lighting')} data-aoi="AOI_cel">Oświetlenie ambiente <b>›</b></button>
      <button className="setting-row" onClick={()=>go('exterior-lights')}>Oświetlenie zewnętrzne <b>›</b></button>
      <button className="setting-row" onClick={()=>go('rain')}>Czujnik deszczu <b>›</b></button>
     </div><Car front/></div>}
    {screen==='ambient-lighting'&&<div className="b-setting-panel">
      <h2>Kolor oświetlenia wnętrza</h2>
      <div className="b-color-grid">{ambientColors.map(c=><button key={c.id} className={ambientColor===c.id?'selected':''} onClick={()=>setAmbientColor(c.id)} aria-pressed={ambientColor===c.id} data-aoi="AOI_cel"><span className="b-color-dot" style={{background:c.hex}}/>{c.name}{ambientColor===c.id?' ✓':''}</button>)}</div>
      <p>Wybrany kolor: {ambientColors.find(c=>c.id===ambientColor)?.name}</p>
    </div>}
    {screen==='radio'&&<div className="b-setting-panel">
      <h2>Stacje FM</h2>
      <label className="mmi-search">Znajdź stację<input aria-label="Szukaj stacji" placeholder="Nazwa stacji" value={query} onChange={e=>setQuery(e.target.value)}/></label>
      <div className="mmi-list b-radio-list">{allStations.map(s=><div key={s.id} className="b-radio-row"><div><strong>{s.name}</strong><small>{s.frequency}</small></div><button data-aoi="AOI_cel" aria-pressed={radioFavorites.includes(s.id)} onClick={()=>toggleRadioFavorite(s.id)}>{radioFavorites.includes(s.id)?'★ W ulubionych':'☆ Dodaj do ulubionych'}</button></div>)}</div>
    </div>}
    {screen==='favorites'&&<div className="b-setting-panel"><h2>Ulubione stacje</h2><div className="mmi-list">{radioStations.filter(s=>radioFavorites.includes(s.id)).map(s=><div key={s.id} className="b-radio-row"><strong>{s.name}</strong><span>★</span></div>)}{!radioFavorites.length&&<p>Nie zapisano jeszcze żadnych stacji.</p>}</div></div>}
    {screen==='navigation'&&<div className="b-setting-panel"><h2>Dokąd chcesz jechać?</h2><button className="b-main-action" onClick={()=>go('nav-search')} data-aoi="AOI_cel"><Icon name="search"/> Wyszukaj adres</button></div>}
    {screen==='nav-search'&&<div className="b-setting-panel"><label className="mmi-search">Adres celu<input aria-label="Adres celu" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Wpisz ulicę lub miejsce"/></label><div className="mmi-list">{destinations.filter(d=>(d.name+' '+d.address).toLocaleLowerCase('pl').includes(query.toLocaleLowerCase('pl'))).map(d=><button key={d.id} className="b-destination" data-aoi="AOI_cel" onClick={()=>go(d.id==='science'?'nav-preview':'nav-preview')}><Icon name="navigation"/>{d.name} — {d.address}</button>)}</div></div>}
    {screen==='nav-preview'&&<div className="b-setting-panel"><h2>{navigationTarget.name}</h2><p>{navigationTarget.address}</p><button className="b-main-action" data-aoi="AOI_cel" onClick={()=>onRoute(navigationTarget)}>Ustaw jako cel nawigacji</button></div>}
    {!['home','vehicle','lights','ambient-lighting','radio','favorites','navigation','nav-search','nav-preview'].includes(screen)&&<div className="b-setting-panel"><h2>Funkcja demonstracyjna</h2><p>Ten ekran nie jest częścią scenariuszy S1–S3.</p><button className="b-main-action" onClick={goHome}>Menu główne</button></div>}
  </div>
 </div>
}
