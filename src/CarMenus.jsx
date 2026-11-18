import { Car } from './Graphics'
import './CarMenus.css'

// Wersja A: układ i nazwy odtworzone na podstawie zdjęć ekranu Audi A6.
// Widok oświetlenia zewnętrznego wymaga osobnego zdjęcia do wiernego odwzorowania.
export default function CarMenus({ screen, go, settings, updateSetting }) {
  if (screen === 'lights') return (
    <div className="audi-lights">
      <div className="audi-lights-list">
        <button className="audi-menu-row" onClick={() => go('exterior-lights')}>Oświetlenie zewnętrzne <span>›</span></button>
        <button className="audi-menu-row" onClick={() => go('ambient-lighting')}>Oświetlenie ambiente <span>›</span></button>
        <button className="audi-menu-row" aria-pressed={settings.rain} onClick={() => updateSetting('rain', !settings.rain)}>Czujnik deszczu <span className={`toggle ${settings.rain ? 'on' : ''}`}/></button>
      </div>
      <div className="audi-car-preview" aria-hidden="true"><Car front /></div>
    </div>
  )
  if (screen === 'ambient-lighting') return (
    <div className="audi-ambient">
      <label htmlFor="ambient-brightness">Jaskrawość</label>
      <div className="audi-ambient-controls">
        <button aria-label="Zmniejsz jaskrawość" onClick={() => updateSetting('ambientBrightness', Math.max(0, (settings.ambientBrightness ?? 80) - 10))}>−</button>
        <input id="ambient-brightness" type="range" min="0" max="100" step="5" value={settings.ambientBrightness ?? 80} onChange={e => updateSetting('ambientBrightness', Number(e.target.value))} aria-label="Jaskrawość oświetlenia ambiente"/>
        <button aria-label="Zwiększ jaskrawość" onClick={() => updateSetting('ambientBrightness', Math.min(100, (settings.ambientBrightness ?? 80) + 10))}>+</button>
      </div>
      <div className="audi-ambient-labels"><span>Wyłącz</span><span>Jaśniej</span></div>
    </div>
  )
  if (screen === 'exterior-lights') return (
    <div className="audi-exterior-placeholder">
      <p>Oświetlenie zewnętrzne</p>
      <small>Ten ekran wymaga dodatkowego zdjęcia oryginalnego menu Audi A6. Nie odtwarzamy ustawień, których nie widać w dokumentacji fotograficznej.</small>
    </div>
  )
  return null
}
