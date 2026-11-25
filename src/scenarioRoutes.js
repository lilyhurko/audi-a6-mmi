import {scenarios} from './model'
export const linkedScenarios = [
 {id:'telefon',title:'Połączenie telefoniczne',icon:'phone',entryScreen:'phone',task:'Wyszukaj kontakt Anna Nowak i rozpocznij połączenie demonstracyjne.'},
 {id:'fotele',title:'Ustawienia fotela',icon:'seat',entryScreen:'seats',task:'Odszukaj ustawienia fotela kierowcy i odchyl oparcie do tyłu.'},
 {id:'temperatura',title:'Zmiana temperatury',icon:'climate',entryScreen:'climate',task:'Ustaw temperaturę po stronie kierowcy na 22°C.'},
 ...scenarios.map(item=>({...item,entryScreen:{S1:'ambient-lighting',S2:'radio',S3:'navigation'}[item.id]})),
]
export const scenarioHash=(version,id)=>`#/${version.toLowerCase()}/scenariusz/${encodeURIComponent(id)}`
export function readScenarioRoute(){
 const match=window.location.hash.match(/^#\/([ab])\/scenariusz\/([^/]+)$/i)
 if(!match)return null
 const item=linkedScenarios.find(s=>s.id.toLowerCase()===match[2].toLowerCase())
 return item?{version:match[1].toUpperCase(),scenario:item,screen:item.entryScreen}:null
}
