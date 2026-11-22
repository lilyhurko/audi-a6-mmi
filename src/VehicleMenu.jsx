import VehicleMenuIcon from './VehicleMenuIcon'

const tiles = [
  { path: 'drive', label: 'Audi drive select', lines: ['Audi drive', 'select'] },
  { path: 'efficiency', label: 'Asystent wydajności', lines: ['Asystent', 'wydajności'] },
  { path: 'seats', label: 'Fotele', lines: ['Fotele'] },
  { path: 'climate', label: 'Klimatyzacja', lines: ['Klimatyzacja'] },
  { path: 'lights', label: 'Światła i widoczność', lines: ['Światła', 'i widoczność'] },
  { path: 'parking', label: 'Sygnalizacja parkowania', lines: ['Sygnalizacja', 'parkowania'] },
  { path: 'assistance', label: 'Asysta kierowcy', lines: ['Asysta', 'kierowcy'] },
  { path: 'maintenance', label: 'Ustawienia i serwis', lines: ['Ustawienia i', 'serwis'] },
]

export default function VehicleMenu({ go, onUnavailable }) {
  return <section className="vehicle-menu" aria-label="Samochód">
    <header className="vehicle-menu-heading"><h1>Samochód</h1></header>
    <div className="icon-grid vehicle-grid">
      {tiles.map(({ path, label, lines }) => <button
        key={path} className="mmi-tile" aria-label={label}
        onClick={() => ['parking', 'assistance', 'efficiency'].includes(path) ? onUnavailable() : go(path)}>
        <div className="vehicle-menu-art" aria-hidden="true">
          <VehicleMenuIcon name={path}/>
        </div>
        <span>{lines.map(line => <span key={line}>{line}</span>)}</span>
      </button>)}
    </div>
    <div className="page-dots" aria-hidden="true"><i className="current"/><i/></div>
  </section>
}
