const shapes = {
  drive: <><path d="M23 14v53m-5-44 5-9 5 9m-10 35 5 9 5-9M45 23h15v26H45zM49 23v-7a4 4 0 0 1 8 0v7M49 49v5m8-5v5M47 56l12 3-12 4 12 4-12 4 12 4"/></>,
  efficiency: <><path d="M17 19h39l7 5-7 5H17zM17 38h49l7 5-7 5H17zM17 57h58l7 5-7 5H17z"/></>,
  seats: <><circle cx="57" cy="14" r="5"/><path d="m52 24-6 24H29c-7 0-10 5-10 10v6h35c4 0 7-3 8-7l8-29c1-5-1-8-5-9-4-1-7 1-8 5l-7 25M24 57h31l8-28M23 64v5h34"/></>,
  climate: <>{[0,90,180,270].map(angle => <path key={angle} transform={`rotate(${angle} 48 43)`} d="M46 40C35 36 25 26 32 17c7-8 18-5 18 7 0 7-1 11-4 16Z"/>)}<circle cx="48" cy="43" r="5"/></>,
  lights: <><path d="M32 18 15 68M43 18l-7 39M53 18l5 29M64 18l17 50"/></>,
  parking: <><path d="M29 74V12h23c17 0 25 9 25 23S68 57 52 57H39v17zM39 23v23h12c10 0 15-4 15-11s-5-12-15-12z"/></>,
  assistance: <><path d="M24 28a30 30 0 0 1 48 0M19 29c-6 8-7 19-3 28m61-28c6 8 7 19 3 28M24 65a30 30 0 0 0 48 0M31 34l5-11h24l5 11 5 6v18H26V40zM31 38h34M33 48h7m16 0h7M30 58v5m36-5v5M40 56h16"/></>,
  maintenance: <><path d="m23 61 33-35c-3-9 2-17 10-19l-3 11 7 6 11-4c-1 10-9 16-18 12L30 69c-5 5-12-3-7-8Z"/><circle cx="27" cy="65" r="2"/><path d="m64 43 3-5 7 2v6l5 3 5-1 3 7-4 4v6l4 4-3 7-6-1-4 3-1 6h-8l-2-6-5-3-5 2-4-7 4-5v-5l-4-4 3-7 6 1z"/><circle cx="68" cy="61" r="8"/></>,
}

export default function VehicleMenuIcon({ name }) {
  return <svg viewBox="0 0 96 88" fill="none" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]}</svg>
}
