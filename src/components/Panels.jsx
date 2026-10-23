import { profile, toolkit } from '../data/profile.js'
import { projects } from '../data/projects.js'
export function Link({ href, children, primary }) {
  return <a className={`btn${primary ? ' primary' : ''}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export function About(){
  return (
    <div>
      <div className="about-header">
        <img
          src="/profile.jpg"
          alt="My profile"
          className="about-profile-photo"
          onError={(e) => console.error("Profile photo failed to load", e)}
        />
        <div>
          <h2>Hi, I'm {profile.name} 👋</h2>
          <p className="cat">{profile.subtitle}</p>
        </div>
      </div>

      {profile.about.map(t => <p key={t}>{t}</p>)}

      <h3>Education</h3>
      {profile.education.map(e => (
        <div className="entry" key={e.title}>
          <strong>{e.title}</strong>
          <span className="when">{e.period}</span>
          <p className="where">{e.place}</p>
          <p>{e.detail}</p>
        </div>
      ))}

      <h3>Experience</h3>
      {profile.experience.map(e => (
        <div className="entry" key={e.title}>
          <strong>{e.title}</strong>
          <span className="when">{e.period}</span>
          <p className="where">{e.place}</p>
          <ul>{e.points.map(x => <li key={x}>{x}</li>)}</ul>
        </div>
      ))}

      <h3>Skills</h3>
      <div className="tags">
        {toolkit.flatMap(g => g.items).map(t => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      <h3>Certifications</h3>
      <ul>{profile.certifications.map(c => <li key={c}>{c}</li>)}</ul>

      <h3>Career interests</h3>
      <div className="tags">
        {profile.interests.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>

      <h3>Contact</h3>
      <ContactLinks />
    </div>
  )
}

export function Toolkit() {
  return (<div>{toolkit.map(g => (<section key={g.title}><h3>{g.title}</h3><div className="tags">{g.items.map(i => <span className="tag" key={i}>{i}</span>)}</div></section>))}</div>)
}
export function Folder({ onOpen }) {
  return (<div><p>{projects.length} project{projects.length === 1 ? '' : 's'}. Select one to see its details.</p>
    <ul className="pgrid">{projects.map(p => (
      <li key={p.id}><div className="pcard">
        <button className="pmain" onClick={() => onOpen(p.id)} aria-label={`Open details for ${p.name}`}>
          <strong><span aria-hidden="true">{p.icon}</span> {p.name}</strong>
          <small>{p.category}</small>
          <span className="pintro">{p.intro}</span>
        </button>
        <div className="tags">{p.tech.slice(0, 5).map(t => <span className="tag" key={t}>{t}</span>)}{p.tech.length > 5 && <span className="tag more">+{p.tech.length - 5}</span>}</div>
        <div className="actions">
          {p.github && <Link href={p.github} primary>GitHub</Link>}
          {p.demo && <Link href={p.demo}>{p.demoLabel || 'Live Demo'}</Link>}
        </div>
      </div></li>))}</ul></div>)
}
function ContactLinks() {
  const dev = import.meta.env.DEV
  const row = (label, url, text) => (<li key={label}>{url ? <Link href={url} primary={label === 'GitHub'}>{text}</Link> : dev && <span className="soon">{label} link coming soon</span>}</li>)
  return (<ul className="plist">
    {row('GitHub', profile.github, 'GitHub Profile')}
    {row('LinkedIn', profile.linkedin, 'LinkedIn')}
    {row('Email', profile.email && `mailto:${profile.email}`, profile.email)}
    {row('Resume', profile.resumeUrl, 'Download Resume')}
  </ul>)
}
export function Contact() {
  return (<div><p>Let's connect. Based in {profile.location}.</p><ContactLinks /></div>)
}
