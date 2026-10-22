import { Link } from './Panels.jsx'
export default function ProjectWindow({ p, onClose }) {
  const dev = import.meta.env.DEV
  return (
    <article className="project">
      <h2><span aria-hidden="true">{p.icon}</span> {p.name}</h2>
      <p className="cat">{p.category}</p>
      <p>{p.intro}</p>
      {p.note && <p className="note">{p.note}</p>}
      <h3>Problem</h3><p>{p.problem}</p>
      <h3>Solution</h3><p>{p.solution}</p>
      <h3>Features</h3><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
      <h3>Technology</h3><div className="tags">{p.tech.map(t => <span className="tag" key={t}>{t}</span>)}</div>
      {p.flow.length > 0 && (<><h3>Workflow</h3><ol className="flow">{p.flow.map(s => <li key={s}>{s}</li>)}</ol></>)}
      {p.images.length > 0 ? p.images.map(src => <img key={src} className="shot" src={src} alt={`${p.name} screenshot`} />)
        : <div className="shot ph">Screenshot placeholder: add images in public/images</div>}
      <h3>My contribution</h3><p>{p.contribution}</p>
      <div className="actions">
        {p.github ? <Link href={p.github} primary>GitHub Repository</Link> : dev && <span className="soon">Repository link coming soon</span>}
        {p.demo ? <Link href={p.demo}>{p.demoLabel || 'Live Demo'}</Link> : dev && <span className="soon">Live demo coming soon</span>}
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </article>
  )
}
