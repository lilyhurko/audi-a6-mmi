import { useId } from 'react'

function Wheel({x,y,scale=1,id}) {
 return <g transform={`translate(${x} ${y}) scale(${scale})`}>
  <ellipse cy="5" rx="45" ry="62" fill="#020407" stroke="#293238" strokeWidth="3"/>
  <ellipse cx="-2" rx="35" ry="51" fill={`url(#${id}-rim)`} stroke="#b7c0b8" strokeWidth="2"/>
  <ellipse cx="-2" rx="27" ry="42" fill="#0d151b" stroke="#6e7b7a"/>
  {[0,72,144,216,288].map(angle=><g key={angle} transform={`rotate(${angle} -2 0)`}><path d="M-7-7-13-37-4-43 3-9 11-32 17-27 8 2Z" fill={`url(#${id}-rim)`} stroke="#afbab3" strokeWidth=".7"/></g>)}
  <ellipse cx="-2" rx="9" ry="13" fill="#8a9691" stroke="#e3e7d7"/>
  <ellipse cx="-2" rx="4" ry="6" fill="#273535"/>
 </g>
}
function Rings({x,y,scale=1}){return <g transform={`translate(${x} ${y}) scale(${scale})`} fill="none" stroke="#d4dcd1" strokeWidth="2">{[0,10,20,30].map(cx=><ellipse key={cx} cx={cx} rx="7" ry="5"/>)}</g>}
export default function Car({front=false,decorative=false}) {
 const id=useId().replaceAll(':','')
 return <svg className="car-graphic" viewBox={front?'0 0 700 390':'0 0 800 420'} role={decorative?undefined:'img'} aria-hidden={decorative||undefined} aria-label={decorative?undefined:front?'Sedan — widok z przodu':'Sedan klasy Audi A6 — widok z przodu i z boku'}>
 <defs>
  <linearGradient id={`${id}-paint`} x1="0" y1="0" x2=".3" y2="1"><stop stopColor="#d2dbce"/><stop offset=".19" stopColor="#aab8ad"/><stop offset=".43" stopColor="#586d65"/><stop offset=".59" stopColor="#263b3c"/><stop offset=".78" stopColor="#17272d"/><stop offset="1" stopColor="#647971"/></linearGradient>
  <linearGradient id={`${id}-hood`} x1="0" y1="0" x2=".85" y2="1"><stop stopColor="#dfe6d4"/><stop offset=".35" stopColor="#a5b8a7"/><stop offset=".7" stopColor="#6d847b"/><stop offset="1" stopColor="#2d4746"/></linearGradient>
  <linearGradient id={`${id}-side`} x1="0" y1="0" x2=".1" y2="1"><stop stopColor="#c5d4c4"/><stop offset=".3" stopColor="#6f8980"/><stop offset=".43" stopColor="#405c57"/><stop offset=".51" stopColor="#263e40"/><stop offset=".9" stopColor="#11262d"/><stop offset="1" stopColor="#70857a"/></linearGradient>
  <linearGradient id={`${id}-glass`} x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#4b6867"/><stop offset=".22" stopColor="#203b40"/><stop offset=".7" stopColor="#0a202c"/><stop offset="1" stopColor="#516e67"/></linearGradient>
  <linearGradient id={`${id}-chrome`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#eef4e4"/><stop offset=".35" stopColor="#9cafa3"/><stop offset=".5" stopColor="#374d4b"/><stop offset=".67" stopColor="#c4d3c4"/><stop offset="1" stopColor="#5b736a"/></linearGradient>
  <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2=".6"><stop stopColor="#d3dcd1"/><stop offset=".35" stopColor="#607871"/><stop offset=".55" stopColor="#e6ecda"/><stop offset="1" stopColor="#2a4242"/></linearGradient>
  <radialGradient id={`${id}-shadow`}><stop stopColor="#000" stopOpacity=".9"/><stop offset="1" stopColor="#000" stopOpacity="0"/></radialGradient>
  <filter id={`${id}-glow`} x="-40%" y="-100%" width="180%" height="300%"><feGaussianBlur stdDeviation="2.2"/></filter>
 </defs>
 {front?<>
  <ellipse cx="350" cy="335" rx="255" ry="42" fill={`url(#${id}-shadow)`}/>
  <path d="M128 230v90q8 24 33 11l9-72m360-29v90q-8 24-33 11l-9-72" fill="#060a10" stroke="#354443"/>
  <path d="m118 187 40-34 37-78q10-17 34-19h240q24 2 34 19l37 78 40 34 10 110q-4 25-31 27H139q-27-2-31-27Z" fill={`url(#${id}-paint)`} stroke="#a6b9aa" strokeWidth="2"/>
  <path d="m194 143 27-66q130-14 258 0l27 66Z" fill={`url(#${id}-glass)`} stroke="#c2d0c0" strokeWidth="2"/>
  <path d="m152 170 45-20h306l45 20-54 34H206Z" fill={`url(#${id}-hood)`}/>
  <path d="m216 151 17 46m251-46-17 46" fill="none" stroke="#e0ead3" strokeOpacity=".6"/>
  <path d="m235 200 230 0 30 31-27 66H232l-27-66Z" fill="#040d16" stroke={`url(#${id}-chrome)`} strokeWidth="5"/>
  {[0,1,2,3,4,5].map(i=><path key={i} d={`M${216+i*2} ${215+i*13}H${484-i*2}`} stroke="#b2c4b6" strokeWidth="2"/>)}
  <Rings x={327} y={222} scale={1.5}/>
  <path d="m131 188 89 12-9 24-80-9Zm438 0-89 12 9 24 80-9Z" fill="#152b33" stroke="#90a99e"/>
  <path d="m138 194 73 9-5 11-64-6m420-14-73 9 5 11 64-6" fill="none" stroke="#e6ffdc" strokeWidth="5"/>
  <path d="m134 254 65 5-13 43h-55Zm432 0-65 5 13 43h55Z" fill="#07131e" stroke="#728b7c"/>
  {[0,1,2].map(i=><path key={i} d={`M138 ${265+i*11}h46m332 0h46`} fill="none" stroke="#4f6660" strokeWidth="2"/>)}
  <path d="m205 306 290 0 8 13H197Z" fill="#030a11" stroke="#849b88"/>
  <path d="m168 145-29-6-9 13 31 9m370-16 29-6 9 13-31 9" fill={`url(#${id}-side)`} stroke="#afc0b1"/>
 </>:<>
  <ellipse cx="412" cy="344" rx="340" ry="52" fill={`url(#${id}-shadow)`}/>
  <path d="m131 269 40 54 455-31 91-51-43-45-438 16Z" fill="#03090e"/>
  <Wheel x={664} y={261} scale={.77} id={id}/>
  <path d="M67 225Q83 204 127 193l139-29 63-16 67-57q20-19 51-23 68-8 119 0 30 3 49 22l65 69 45 31q13 10 17 32l5 38-35 23-14-4q2-39-12-59-10-15-29-12-32 6-36 55l-1 25-233 47q5-40-14-67-16-24-41-18-41 10-46 61l-2 35-74 0-128-41-7-59Z" fill={`url(#${id}-paint)`} stroke="#8da89a" strokeWidth="1.6"/>
  <path d="m285 217 70-40 310-18 57 37 13 58-35 18q-1-37-12-53-19-26-44-11-25 16-25 69l-230 43q2-51-24-70-26-19-50 7Z" fill={`url(#${id}-side)`}/>
  <path d="m96 215 178-46 64-13 73 22-126 66-114-9Z" fill={`url(#${id}-hood)`} stroke="#a7bca9" strokeWidth="1.2"/>
  <path d="m124 207 148-31 91-10m-184 55 103-33 75-10" stroke="#e0ebd5" strokeOpacity=".65" fill="none"/>
  <path d="m337 154 68-58q16-12 38-15 62-8 116-1l-53 72-80 21Z" fill={`url(#${id}-glass)`} stroke="#c2d2c1" strokeWidth="2"/>
  <path d="m515 148 52-67q24 4 38 18l54 57-151 24Z" fill={`url(#${id}-glass)`} stroke="#bbcbb9" strokeWidth="2"/>
  <path d="m577 89-27 79m48-61-12 55" stroke="#070f17" strokeWidth="8"/>
  <path d="m578 91-26 75m49-56-12 48" stroke="#bcc9ba" strokeWidth="1.2"/>
  <path d="m403 92 38-15 117 0" stroke="#f0f2d8" strokeOpacity=".7" fill="none"/>
  <path d="m344 179 12 10 301-27 22-5" fill="none" stroke={`url(#${id}-chrome)`} strokeWidth="3"/>
  <path d="m428 185 11 104q2 8 14 6l151-30 8-87M431 291l-33 8m217-127 5 42m-229-23-28 10" stroke="#bdcdb8" strokeOpacity=".55" fill="none" strokeWidth="1.2"/>
  <path d="m447 202 24-4m133-19 18-3" stroke="#d6dfcb" strokeWidth="3"/>
  <path d="m377 177 4-14 24-5 8 8-4 14-24 6Z" fill={`url(#${id}-chrome)`} stroke="#c9d8c5"/>
  <path d="m84 231 89 4 111 19-6 83-104 12-101-39Z" fill={`url(#${id}-paint)`} stroke="#91a792"/>
  <path d="m103 247 151 23-3 54-81 12-69-27Z" fill="#020a14" stroke={`url(#${id}-chrome)`} strokeWidth="4"/>
  {[0,1,2,3,4,5].map(i=><path key={i} d={`m108 ${256+i*9} 64 23 75-${5+i*3}`} fill="none" stroke="#a5bba8" strokeWidth="1.3"/>)}
  <Rings x={168} y={279} scale={1.12}/>
  <path d="m77 223 78-4 18 18-6 12-87-11Zm103 14 101-15 27-14-10 27-101 22Z" fill="#152b32" stroke="#b5c9b4" strokeWidth="1.3"/>
  <path d="m83 227 65-1 11 10-73-5m104 12 91-16 17-9" fill="none" stroke="#efffe0" strokeWidth="4"/>
  <path d="m83 227 65-1 11 10m31 7 91-16 17-9" fill="none" stroke="#eaffc5" strokeWidth="7" opacity=".5" filter={`url(#${id}-glow)`}/>
  <path d="m82 282 16 7 2 23-16-7m180-37 19-2-1 46-22 7Z" fill="#020a12" stroke="#5d7b6d"/>
  <path d="m100 321 70 23 86-12m137-12 220-45" fill="none" stroke={`url(#${id}-chrome)`} strokeWidth="2"/>
  <path d="m714 195 20 12 3 13-19-6Z" fill="#aa2632" stroke="#e6716e"/>
  <Wheel x={338} y={302} id={id}/>
  <path d="M288 300q0-61 45-67 48-6 53 61m237-40q3-46 35-51 31-4 38 36" stroke="#bdcdb9" strokeWidth="2.5" fill="none"/>
  <path d="M300 266q12-24 33-26m306-16 17-14" fill="none" stroke="#edf3db" strokeOpacity=".5" strokeWidth="2"/>
 </>}
 </svg>
}
