import { useEffect, useState } from 'react'

export function useDeviceClock() {
 const [now,setNow]=useState(()=>new Date())
 useEffect(()=>{
  const update=()=>setNow(new Date())
  const timer=window.setInterval(update,1000)
  window.addEventListener('focus',update)
  document.addEventListener('visibilitychange',update)
  return()=>{clearInterval(timer);window.removeEventListener('focus',update);document.removeEventListener('visibilitychange',update)}
 },[])
 return {
  time:new Intl.DateTimeFormat('pl-PL',{hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now),
  date:new Intl.DateTimeFormat('pl-PL',{day:'2-digit',month:'2-digit',year:'numeric'}).format(now),
  iso:now.toISOString(),
  timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,
 }
}
