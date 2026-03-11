import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Nodes from './components/Nodes'
import Contact from './components/Contact'
import Galaxy from './components/Galaxy'

function App() {
  return (
    <div className="min-h-screen text-gray-100" style={{ background: '#0a0a0a' }}>
      {/* Galaxy WebGL background — fixed, covers entire viewport */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1.2}
          glowIntensity={0.35}
          saturation={0.3}
          hueShift={140}
          twinkleIntensity={0.4}
          rotationSpeed={0.05}
          repulsionStrength={2}
          speed={0.8}
          transparent={false}
        />
      </div>

      {/* Content sits on top of the galaxy */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Nodes />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
