import Icon from './Icons'
import Car from './Car'
export { default as Car } from './Car'
export function Seat({mirror = false}) {
 const shading = mirror ? 'seat-passenger' : 'seat-driver'
 return (
  <svg className={`seat-graphic ${mirror ? 'mirror' : ''}`} viewBox="0 0 150 190" aria-hidden="true">
   <defs>
    <linearGradient id={shading} x1="0" x2="1">
     <stop stopColor="#a6a795"/>
     <stop offset=".2" stopColor="#4c5049"/>
     <stop offset=".48" stopColor="#181d21"/>
     <stop offset=".78" stopColor="#242a2c"/>
     <stop offset="1" stopColor="#818578"/>
    </linearGradient>
   </defs>
   <ellipse cx="79" cy="174" rx="61" ry="7" fill="#05070a" opacity=".55"/>
   <g fill={`url(#${shading})`} stroke="#d6d1b7" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M38 34c-3-5-1-17 3-22 3-4 11-4 14-1 3 3 2 8 1 13l-2 10c-2 4-13 5-16 0Z"/>
    <path d="M46 38c0 3 0 7 1 10" fill="none"/>
    <path d="M46 45c-11 2-17 14-17 27 0 14 6 30 13 48l10 26c4 10 12 15 22 16 10 1 22-2 34-5l19-5c7-2 11-7 9-13-2-5-9-8-16-8-12 0-25 4-36 5-9 1-12-3-15-12L52 72c-2-8 5-13 4-20-1-5-5-8-10-7Z"/>
    <path d="M33 60c-3 12 0 28 6 45l15 40c4 12 12 19 24 20 11 1 22-2 36-5l16-4c5-2 7-5 7-10-4 4-8 4-15 5l-39 8c-13 2-21-2-26-15L43 104c-5-16-8-30-5-42Z" fill="#151b20"/>
    <path d="M40 56c4-4 9-3 10 3-5 8-4 15 0 26l14 42c4 11 11 15 22 13l31-5c7-1 11 1 13 4-10 0-28 5-40 7-16 3-25-1-30-14L46 92c-5-15-7-27-6-36Z" fill="#11171d" stroke="#949687"/>
    <path d="M58 161c4 8 12 11 21 11l42-5 4-9" fill="none" stroke="#a5a497"/>
   </g>
  </svg>
 )
}
export function Cockpit(){return <svg className="cockpit" viewBox="0 0 900 260" aria-label="Schemat deski rozdzielczej"><defs><linearGradient id="dash" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#71877c"/><stop offset=".18" stopColor="#101b20"/><stop offset=".8" stopColor="#050a10"/><stop offset="1" stopColor="#82968a"/></linearGradient><radialGradient id="wheel"><stop stopColor="#070d11"/><stop offset=".7" stopColor="#192b2b"/><stop offset=".85" stopColor="#8fa89b"/><stop offset=".91" stopColor="#132026"/><stop offset="1" stopColor="#637d71"/></radialGradient></defs><g fill="url(#dash)" stroke="#849b8b" strokeWidth="2"><path d="M20 65Q80 35 150 53L270 62 310 42 840 48l42 29-13 75-260 14-103 45-265-12-35-49-154-5Z"/><path d="M310 71h495l45 20-22 22H320ZM330 80h125v23H330Zm145 0h125v23H475Zm235 0h115v23H710Z"/><path d="M340 76v32m20-32v32m20-32v32m20-32v32m20-32v32m20-32v32m50-32v32m20-32v32m20-32v32m20-32v32m20-32v32M322 124l239 4 45 24 242-7M330 135v54h188l43-33-27-22Z" fill="none"/><path d="m377 145 132 1-2 34H377Z" fill="#030811"/><circle cx="165" cy="131" r="107" fill="url(#wheel)" strokeWidth="5"/><circle cx="165" cy="131" r="85" fill="#0a1119" stroke="#677e74"/><path d="m79 113 48 19 15-25h48l16 25 45-19-9 34-40 9-20 45h-33l-21-45-42-9Z"/><path d="m138 115 52 0-7 42h-37Z" fill="#859789"/><path d="m89 127 35 11m81 0 36-12M150 169h30" fill="none" stroke="#d2d9bd"/></g></svg>}
export function TileArt({name}){
 if(name==='vehicle')return <Car front decorative/>
 if(name==='radio')return <svg className="tile-art" viewBox="0 0 180 90" aria-hidden="true">{Array.from({length:9},(_,i)=><path key={i} d={`M5 ${65-i*2} C40 ${-20+i*5} 50 ${110-i*3} 95 ${50+i*2} S140 ${25+i*4} 175 ${50+i}`} fill="none" stroke="#b8d2bf" opacity={.25+i*.08} strokeWidth="1.3"/>)}</svg>
 if(name==='media')return <svg className="tile-art" viewBox="0 0 180 90" aria-hidden="true">{[0,1,2,3,4].map(i=><ellipse key={i} cx="90" cy={20+i*13} rx={70-i*4} ry={9+i} fill={i===4?'#81988a33':'none'} stroke="#b8cdbb" strokeWidth="1.3" opacity={.5+i*.1}/>)}</svg>
 return <Icon name={name}/>
}
