import { ThreeDCardDemo } from './test.jsx'
import { FloatingDockDemo } from './navbar/navbar.jsx'
import { BackgroundRippleEffectDemo } from './background/background.jsx'
import './index.css'

function App() {
  return (
    <main className='text-4xl font-bold'>
      <BackgroundRippleEffectDemo />
      <FloatingDockDemo />
      <ThreeDCardDemo />
    </main>
  )
}

export default App
