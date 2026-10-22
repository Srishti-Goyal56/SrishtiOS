export default function Window({ id, title, active, minimized, onClose, onMinimize, onFocus, index, children }) {
  return (
    <section className={`window${active ? ' active' : ''}${minimized ? ' minimized' : ''}`} style={{ zIndex: 10 + index, '--o': index }}
      role="dialog" aria-label={title} onMouseDown={() => onFocus(id)}>
      <header className="titlebar">
        <span className="title">{title}</span>
        <button className="tbtn" onClick={() => onMinimize(id)} aria-label={`Minimize ${title}`}>–</button>
        <button className="tbtn close" onClick={() => onClose(id)} aria-label={`Close ${title}`}>×</button>
      </header>
      <div className="body">{children}</div>
    </section>
  )
}
