import { useState } from 'react'
import Desktop from './components/Desktop.jsx'
import Taskbar from './components/Taskbar.jsx'
import Window from './components/Window.jsx'
import ProjectWindow from './components/ProjectWindow.jsx'
import { About, Toolkit, Folder, Contact } from './components/Panels.jsx'
import { projects } from './data/projects.js'

const apps = [
  { id: 'about', icon: '👩‍💻', label: 'About Me' }, { id: 'folder', icon: '📁', label: 'My Projects' },
  { id: 'toolkit', icon: '🧰', label: 'My Toolkit' }, { id: 'contact', icon: '✉️', label: 'Contact' },
  ...projects.map(p => ({ id: p.id, icon: p.icon, label: p.name })),
]
const titles = Object.fromEntries(apps.map(a => [a.id, a.label]))

export default function App() {
  const [wins, setWins] = useState([{ id: 'about', min: false }]) // order = stacking order
  const activeId = [...wins].reverse().find(w => !w.min)?.id
  const open = id => setWins(w => [...w.filter(x => x.id !== id), { id, min: false }])
  const close = id => setWins(w => w.filter(x => x.id !== id))
  const minimize = id => setWins(w => w.map(x => x.id === id ? { ...x, min: true } : x))
  const taskClick = id => (id === activeId ? minimize(id) : open(id))
  const content = id => {
    if (id === 'about') return <About />
    if (id === 'toolkit') return <Toolkit />
    if (id === 'contact') return <Contact />
    if (id === 'folder') return <Folder onOpen={open} />
    const p = projects.find(x => x.id === id)
    return p && <ProjectWindow p={p} onClose={() => close(id)} />
  }
  return (<>
    <Desktop icons={apps} onOpen={open} />
    {wins.map((w, i) => (
      <Window key={w.id} id={w.id} index={i} title={titles[w.id]} active={w.id === activeId} minimized={w.min}
        onClose={close} onMinimize={minimize} onFocus={open}>{content(w.id)}</Window>))}
    <Taskbar windows={wins} activeId={activeId} titles={titles} onStart={() => open('about')} onTaskClick={taskClick} />
  </>)
}
