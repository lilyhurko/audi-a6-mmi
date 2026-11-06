// Display-only crop: original photo pixels are preserved; the surrounding UI is clipped out.
export default function CarPhoto() {
 return <svg className="car-graphic car-photo" viewBox="850 395 590 335" role="img" aria-label="Samochód z oryginalnego ekranu Audi MMI">
  <image href="/images/mmi-drive-reference.jpg" x="0" y="0" width="2048" height="1536"/>
 </svg>
}
