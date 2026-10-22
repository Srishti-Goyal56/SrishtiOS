import DesktopIcon from './DesktopIcon.jsx'
import { profile } from '../data/profile.js'
export default function Desktop({ icons, onOpen }) {
  return (
    <main className="desktop">
      <div className="hero">
        <p className="brand">{profile.brand}</p><h1>{profile.name}</h1><p>{profile.subtitle}</p>
        <p className="welcome">{profile.welcome}</p>
        <p className="avail"><span className={`dot${profile.available ? ' ok' : ''}`} />{profile.available ? profile.availabilityText : 'Currently unavailable'}</p>
      </div>
      <div className="icons">{icons.map(i => <DesktopIcon key={i.id} icon={i.icon} label={i.label} onOpen={() => onOpen(i.id)} />)}</div>
      <aside className="sticky" aria-label="Note">📝 {profile.note}</aside>
    </main>
  )
}
