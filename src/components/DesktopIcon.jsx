export default function DesktopIcon({ icon, label, onOpen }) {
  return (<button className="icon" onClick={onOpen} aria-label={`Open ${label}`}><span className="glyph" aria-hidden="true">{icon}</span><span className="label">{label}</span></button>)
}
