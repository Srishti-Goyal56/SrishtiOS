import { useEffect, useState } from 'react'
export default function Taskbar({ windows, activeId, titles, onStart, onTaskClick }) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t) }, [])
  return (
    <nav className="taskbar" aria-label="Taskbar">
      <button className="start" onClick={onStart} aria-label="Start: open welcome window">✦ Start</button>
      <div className="tasks">
        {windows.map(w => (
          <button key={w.id} className={`task${w.id === activeId ? ' on' : ''}`} onClick={() => onTaskClick(w.id)}
            aria-pressed={w.id === activeId}>{titles[w.id]}</button>))}
      </div>
      <time className="clock" dateTime={now.toISOString()}>{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
    </nav>
  )
}
