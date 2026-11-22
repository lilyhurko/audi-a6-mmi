const shapes = {
 search: <><circle cx="36" cy="31" r="17"/><path d="m24 44-13 14"/></>,
 calls: <><path d="m18 12 10 11-7 9c5 10 11 16 21 21l9-7 11 10-6 8c-4 5-10 4-16 1C23 57 9 43 7 27c-1-6 2-10 5-13zM47 13h21m-21 7h21m-21 7h21"/></>,
 favorites: <path d="m40 9 9 18 20 3-15 15 4 21-18-10-19 10 4-21L10 30l21-3z"/>,
 contacts: <><path d="M20 10h33a5 5 0 0 1 5 5v15M58 46v16a5 5 0 0 1-5 5H20z"/><path d="M43 30h20v16H43a8 8 0 0 1 0-16Z"/><circle cx="44" cy="38" r="1"/></>,
 voicemail: <><circle cx="23" cy="37" r="14"/><circle cx="57" cy="37" r="14"/><path d="M23 51h34"/></>,
 dial: <>{[0,1,2].flatMap(row=>[0,1,2].map(col=><rect key={`${row}-${col}`} x={17+col*18} y={9+row*17} width="11" height="11" rx="1"/>))}<rect x="35" y="60" width="11" height="11" rx="1"/></>,
}

export default function PhoneMenuIcon({ name }) {
 return <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]}</svg>
}
