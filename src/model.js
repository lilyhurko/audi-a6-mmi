export const scenarios = [
  { id:'S1', title:'Media', icon:'media', task:'Odtwórz „Nocna trasa” z listy często odtwarzanych utworów.' },
  { id:'S2', title:'Nawigacja', icon:'navigation', task:'Wybierz Centrum Nauki, a następnie rozpocznij prowadzenie.' },
  { id:'S3', title:'Klimatyzacja', icon:'climate', task:'Ustaw 22°C po stronie kierowcy i włącz SYNC.' },
]
export const initialClimate = { left:21, right:23, sync:false, power:true, ac:true, max:false, autoLeft:true, autoRight:true, recirculation:false, leftHeat:0, rightHeat:0, leftVent:0, rightVent:0, fan:3, direction:'face' }
export const demoTracks = [
  {id:'demo-night',title:'Nocna trasa',artist:'MMI · nagranie demonstracyjne',album:'Jazda nocą',genre:'Elektroniczna',src:'/audio/night.wav',plays:4},
  {id:'demo-morning',title:'Poranek',artist:'MMI · nagranie demonstracyjne',album:'Jazda nocą',genre:'Elektroniczna',src:'/audio/morning.wav',plays:2},
  {id:'demo-calm',title:'Spokojny rytm',artist:'MMI · nagranie demonstracyjne',album:'Podróż',genre:'Ambient',src:'/audio/calm.wav',plays:1},
]
export const destinations = [
  {id:'science',name:'Centrum Nauki',address:'ul. Odkrywców 12',x:900,y:80},
  {id:'station',name:'Dworzec Główny',address:'plac Dworcowy 1',x:1100,y:380},
  {id:'park',name:'Park Miejski',address:'al. Parkowa 8',x:300,y:80},
  {id:'museum',name:'Muzeum Techniki',address:'ul. Fabryczna 4',x:700,y:280},
  {id:'parking',name:'Parking Centrum',address:'ul. Centralna 6',x:500,y:180},
]
export const currentLocation={x:500,y:380}
// A deterministic street network for the simulated navigation, independent of internet services.
export const xs=[100,300,500,700,900,1100,1300]
export const ys=[80,180,280,380]
export function calculateRoute(destination) {
  const points=[currentLocation]
  let x=currentLocation.x,y=currentLocation.y
  while(x!==destination.x){x+=Math.sign(destination.x-x)*200;points.push({x,y})}
  while(y!==destination.y){const index=ys.indexOf(y);y=ys[index+Math.sign(destination.y-y)];points.push({x,y})}
  const distance=points.slice(1).reduce((sum,p,i)=>sum+Math.hypot(p.x-points[i].x,p.y-points[i].y),0)*3.4
  return {points,distance,minutes:Math.max(2,Math.round(distance/420))}
}
export function formatTime(seconds){if(!Number.isFinite(seconds))return '0:00';return `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}`}
