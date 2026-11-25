// Isolate the original artwork; labels and tile controls remain native UI.
const artwork = {
  radio: [590, 346, 200, 98],
  media: [843, 337, 196, 106],
  phone: [1102, 341, 190, 102],
  navigation: [1353, 323, 201, 119],
  connection: [638, 548, 121, 113],
  vehicle: [856, 562, 172, 96],
  favorites: [1139, 544, 114, 120],
  settings: [1365, 548, 191, 109],
}

export default function HomeMenuArt({ name }) {
  const [x, y, width, height] = artwork[name]
  return <div className={`home-art home-art-${name}`} aria-hidden="true">
    <svg viewBox={`${x} ${y} ${width} ${height}`}>
      <image href="/images/mmi-menu-reference.jpg" width="2048" height="1536" />
    </svg>
  </div>
}
