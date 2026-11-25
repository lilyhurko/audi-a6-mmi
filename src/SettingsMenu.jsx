import Icon from './Icons'
import VehicleMenuIcon from './VehicleMenuIcon'

const items = [
 ['general','Ogólne',['Ogólne'],'general'],
 ['brightness','Wskazanie i jasność',['Wskazanie i','jasność'],'display'],
 ['general','Język i klawiatura',['Język i','klawiatura'],'language'],
 ['sound','Dźwięk',['Dźwięk'],'sound'],
 ['maintenance','Pielęgnacja systemu',['Pielęgnacja','systemu'],'service'],
 ['connection','Użytkownicy',['Użytkownicy'],'users'],
 ['connection','Podłączone urządzenia',['Podłączone','urządzenia'],'devices'],
 ['connection','Ustawienia połączeń',['Ustawienia','połączeń'],'connections'],
]
function SettingsArt({name}) {
 if(name==='general') return <Icon name="settings"/>
 if(name==='sound') return <Icon name="sound"/>
 if(name==='service') return <VehicleMenuIcon name="maintenance"/>
 return <svg viewBox="0 0 88 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  {name==='display'&&<><path d="M13 27q31-11 62 0l-4 29q-10 6-22-1H38q-12 7-22 1z"/><path strokeDasharray="3 5" d="M31 30v21m26-21v21"/></>}
  {name==='language'&&<><circle cx="38" cy="34" r="27"/><path d="M11 34h54M17 18h42M17 49h20M38 7c-17 18-17 36 0 54M38 7c12 12 16 23 13 35"/><path d="M37 46h39v24H37zM42 52h29m-29 6h29m-29 6h29M47 51v14m9-14v14m9-14v14"/></>}
  {name==='users'&&<><circle cx="34" cy="20" r="10"/><path d="M15 66V41q19-8 38 0v25zM44 48h32v20H44zM50 54h6v8h-6zm12 0h8v8h-8z"/></>}
  {['devices','connections'].includes(name)&&<><path d="M10 23q29-27 58 0M18 34q21-20 42 0M28 44q11-11 22 0"/><circle cx="39" cy="53" r="2" fill="currentColor"/>{name==='devices'?<path d="M51 57h23m-23 7h23m-23 7h23"/>:<g transform="translate(49 43) scale(.42)"><path d="m24 4 3 7 8 3 7-2 6 10-5 6v9l5 6-6 10-8-2-7 4-3 7H12l-3-7-8-4-7 2-6-10 5-7v-8l-5-6 6-10 8 2 7-4 3-7z"/><circle cx="18" cy="33" r="12"/></g>}</>}
 </svg>
}
export default function SettingsMenu({go}) {
 return <section className="vehicle-menu settings-menu" aria-label="Ustawienia">
  <header className="vehicle-menu-heading"><h1>Ustawienia</h1></header>
  <div className="icon-grid vehicle-grid settings-menu-grid">{items.map(([path,label,lines,icon])=><button className="mmi-tile" key={label} aria-label={label} onClick={()=>go(path)}><div className="settings-menu-art"><SettingsArt name={icon}/></div><span>{lines.map(line=><span key={line}>{line}</span>)}</span></button>)}</div>
  <div className="page-dots" aria-hidden="true"><i className="current"/><i/></div>
 </section>
}
