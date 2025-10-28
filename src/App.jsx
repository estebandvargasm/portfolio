import { ThreeDCardDemo } from './test.jsx'
import { FloatingDockDemo } from './navbar/navbar.jsx'
import { BackgroundRippleEffectDemo } from './background/background.jsx'
import Header from './header/header.jsx'
import About from './about/about.jsx'
import Projects from './projects/projects.jsx'
import Contact from './contact/contact.jsx'
import './index.css'

function App() {
  return (
    <main className='text-4xl font-bold'>
      <BackgroundRippleEffectDemo />
      <Header />
      <About />
      <Projects />
      <Contact />
      <FloatingDockDemo />
      <ThreeDCardDemo />
    </main>
  )
}

export default App
