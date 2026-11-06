export default function Icon({ name }) {
  const paths = {
    search: <><circle cx="20" cy="20" r="13"/><path d="m30 30 13 13"/></>,
    folder: <path d="M3 13h16l5 6h21v23H3Zm0 6h42M3 13V8h17l5 5h20v6"/>,
    mic: <><path d="m14 33 17-19m-6-8c10-9 22 3 14 12l-4 4-14-12Zm-12 24 8 8-15 4Z"/><path d="m26 30 10 10c6 5 10-1 6-5"/></>,
    album: <><path d="M6 4h36v40H6Z"/><path d="M24 31V13l10-2v17"/><ellipse cx="19" cy="32" rx="5" ry="3"/><ellipse cx="29" cy="29" rx="5" ry="3"/></>,
    playlist: <><path d="M15 25V5l17-2v20M24 30h21M24 37h21M24 44h21"/><ellipse cx="9" cy="27" rx="6" ry="4"/></>,
    user: <><circle cx="24" cy="12" r="8"/><path d="M9 44V31q0-10 15-10t15 10v13Z"/></>,
    seat: <><circle cx="15" cy="8" r="4"/><path d="m12 15 5 17 17 4 6 5M10 15l-2 2 4 22h21M20 19l6 10 10 1"/></>,
    seatHeat: <><path d="m9 6 5 24 24 4 4 9H12L5 12ZM21 6q-5 5 0 9t0 9m8-18q-5 5 0 9t0 9m8-18q-5 5 0 9t0 9"/></>,
    seatVent: <><path d="m8 5 5 26 26 3 4 9H11L4 13Z"/><circle cx="29" cy="17" r="3"/><path d="M29 14c-10-9 1-14 3-7 1 3-1 6-3 7Zm3 3c9-10 14 1 7 3-3 1-6-1-7-3Zm-3 3c10 9-1 14-3 7-1-3 1-6 3-7Zm-3-3c-9 10-14-1-7-3 3-1 6 1 7 3Z"/></>,
    recirculation: <><path d="m5 22 8-11h21l9 11v17H5ZM15 26h19l-5-5m5 5-5 5M34 34H15l5 5m-5-5 5-5"/></>,
    windshield: <><path d="M4 12q20-13 40 0l-5 27H9Z"/><path d="M17 34V16m-4 4 4-5 4 5M30 34V16m-4 4 4-5 4 5"/></>,
    rear: <><path d="M5 9h38v31H5Z"/><path d="M14 34V16m-4 4 4-5 4 5m6 14V16m-4 4 4-5 4 5m6 14V16m-4 4 4-5 4 5"/></>,

    sound: <><path d="M4 18h10L29 6v36L14 30H4Z"/><path d="M35 15q10 9 0 18m5-25q17 16 0 32"/></>,
    home: <><path d="M5 22 24 6l19 16M10 19v23h28V19" /></>,
    media: <><path d="M18 35V12l22-5v24M18 18l22-5"/><ellipse cx="11" cy="36" rx="7" ry="5"/><ellipse cx="33" cy="32" rx="7" ry="5"/></>,
    navigation: <path d="m24 4 17 39-17-10-17 10L24 4Z" />,
    climate: <><circle cx="24" cy="24" r="4"/><path d="M24 20C9 6 25-2 29 9c2 5-2 9-5 11ZM28 24c14-15 22 1 11 5-5 2-9-2-11-5ZM24 28c15 14-1 22-5 11-2-5 2-9 5-11ZM20 24C6 39-2 23 9 19c5-2 9 2 11 5Z"/></>,
    settings:<><circle cx="24" cy="24" r="9"/><path d="m20 4 8 0 2 7 6-3 6 6-3 6 7 2v8l-7 2 3 6-6 6-6-3-2 7h-8l-2-7-6 3-6-6 3-6-7-2v-8l7-2-3-6 6-6 6 3Z" transform="translate(1 -2) scale(.96)"/></>,
    back:<path d="M18 12 5 23l13 1m-13-1h36v20H26"/>,
    vehicle:<><path d="m8 23 6-13h21l6 13M5 25l4-3h30l4 3v16H5ZM8 32h9m14 0h9M10 41v4m28-4v4M19 31h10v6H19Z"/></>,
    phone:<path d="M9 5 4 12c0 16 18 34 32 31l8-8-12-9-6 6c-6-3-10-7-12-12l6-5L9 5Z"/>,
    star:<path d="m24 4 6 14 15 2-11 11 3 15-13-8-14 8 3-15L2 20l16-2Z"/>,
    radio:<><path d="M24 20v25m-5 0h10M15 13c-8 8-8 18 0 25m18-25c8 8 8 18 0 25M8 7C-3 18-3 31 8 42M40 7c11 11 11 24 0 35"/><circle cx="24" cy="17" r="5"/></>,
  }
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">{paths[name] || paths.settings}</svg>
}
