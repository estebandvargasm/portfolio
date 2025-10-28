import { ThreeDCardDemo } from './test.jsx'
import { FloatingDockDemo } from './navbar/navbar.jsx'
import { BackgroundRippleEffectDemo } from './background/background.jsx'
import About from './about/about.jsx'
import Projects from './projects/projects.jsx'
import Contact from './contact/contact.jsx'
import './index.css'

function App() {
  return (
    <main className='pb-24 text-4xl font-bold'>
      <BackgroundRippleEffectDemo />
      <About />
      <Projects />
      <Contact />
      <FloatingDockDemo />
    </main>
  )
}

export default App
