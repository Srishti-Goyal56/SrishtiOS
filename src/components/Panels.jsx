import { profile, toolkit } from '../data/profile.js'
import { projects } from '../data/projects.js'
export function Link({ href, children, primary }) {
  return <a className={`btn${primary ? ' primary' : ''}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}
export function About() {
  return (<div><h2>Hi, I'm {profile.name} 👋</h2><p className="cat">{profile.subtitle}</p>
    {profile.about.map(t => <p key={t}>{t}</p>)}
    <h3>Currently learning</h3><div className="tags">{profile.learning.map(t => <span className="tag" key={t}>{t}</span>)}</div>
    <h3>Goals</h3><p>{profile.goals}</p>
    <h3>How I work</h3><ul>{profile.approach.map(t => <li key={t}>{t}</li>)}</ul></div>)
}
export function Toolkit() {
  return (<div><p className="note">Starting points I'm learning and using. Edit this list in src/data/profile.js.</p>
    {toolkit.map(g => (<section key={g.title}><h3>{g.title}</h3><div className="tags">{g.items.map(i => <span className="tag" key={i}>{i}</span>)}</div></section>))}</div>)
}
export function Folder({ onOpen }) {
  return (<div><p>Four projects, in order:</p><ul className="plist">{projects.map(p => (
    <li key={p.id}><button className="btn" onClick={() => onOpen(p.id)}>{p.icon} {p.name}<small> {p.category}</small></button></li>))}</ul></div>)
}
export function Contact() {
  const dev = import.meta.env.DEV
  const row = (label, url, text) => (<li key={label}>{url ? <Link href={url} primary={label === 'GitHub'}>{text}</Link> : dev && <span className="soon">{label} link coming soon</span>}</li>)
  return (<div><p>Let's connect.</p><ul className="plist">
    {row('GitHub', profile.github, 'GitHub Profile')}
    {row('LinkedIn', profile.linkedin, 'LinkedIn')}
    {row('Email', profile.email && `mailto:${profile.email}`, profile.email)}
    {row('Resume', profile.resumeUrl, 'Download Resume')}
  </ul></div>)
}
