import Icon from './Icons'
export default function MediaMenuIcon({name}) {
 if(['mic','album','playlist','folder'].includes(name))return <Icon name={name}/>
 return <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 {['note','recent'].includes(name)&&<><path d="M43 53V18c2 11 15 9 14 21-5-6-10-5-14-9"/><ellipse cx="36" cy="55" rx="8" ry="5" fill="currentColor"/>{name==='recent'&&<><path d="M18 23a29 29 0 1 1-5 23M12 13v16h16"/></>}</>}
 {name==='guitar'&&<g transform="rotate(40 40 40)"><path d="M35 11h10v31c15-3 19 8 13 14 9 17-4 24-18 24S13 73 22 56c-6-6-2-17 13-14z"/><circle cx="40" cy="58" r="6"/><path d="M40 12v39m-9-36h4m10 0h4m-18 7h4m10 0h4"/></g>}
 {name==='video'&&<><path d="M13 31h54v38H13zM13 22l52-11 3 12-53 11zM25 20l9 10m8-14 9 10m-36 16h50M32 48l19 9-19 9z"/></>}
 </svg>
}
