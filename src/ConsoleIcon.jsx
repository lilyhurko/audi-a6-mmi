export default function ConsoleIcon({name}) {
 return <svg viewBox="0 0 64 52" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  {name==='hazard'&&<><path d="M32 4 59 48H5z"/><path d="m32 13 20 30H12z"/><path d="m32 23 12 15H20z"/></>}
  {name==='traction'&&<><path d="m24 11 3-6h12l3 6 4 5v14H21V16zM25 15h17M25 23h4m10 0h4M24 30v3m19-3v3M25 36c-15 3 8 5-5 9m20-9c-15 3 8 5-5 9"/></>}
  {name==='front'&&<><path d="M10 16q22-17 44 0L47 40q-15-7-30 0z"/>{[23,32,41].map(x=><path key={x} d={`M${x} 34v-9q-5-4 0-8v-4m-3 3 3-3 3 3`}/>)}</>}
  {name==='rear'&&<><rect x="12" y="10" width="40" height="31" rx="2"/>{[23,32,41].map(x=><path key={x} d={`M${x} 36v-8q-5-4 0-8v-5m-3 3 3-3 3 3`}/>)}</>}
 </svg>
}
