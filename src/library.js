let database
function openLibrary(){
  if(!database)database=new Promise((resolve,reject)=>{
    const request=indexedDB.open('mmi-audio-library',1)
    request.onupgradeneeded=()=>request.result.createObjectStore('tracks',{keyPath:'id'})
    request.onsuccess=()=>resolve(request.result)
    request.onerror=()=>reject(request.error)
  })
  return database
}
export async function loadTracks(){const db=await openLibrary();return new Promise((resolve,reject)=>{const r=db.transaction('tracks').objectStore('tracks').getAll();r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
export async function saveTrack(track){const db=await openLibrary();return new Promise((resolve,reject)=>{const tx=db.transaction('tracks','readwrite');tx.objectStore('tracks').put(track);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
export async function removeTrack(id){const db=await openLibrary();return new Promise((resolve,reject)=>{const tx=db.transaction('tracks','readwrite');tx.objectStore('tracks').delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
