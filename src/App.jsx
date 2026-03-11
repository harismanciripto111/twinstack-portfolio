import FloatingLines from './components/FloatingLines'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Nodes from './components/Nodes'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{ background: '#060608', minHeight: '100vh', position: 'relative' }}>
      {/* WebGL FloatingLines background — fixed, behind everything */}
      <FloatingLines
        animationSpeed={0.35}
        interactive={true}
        parallax={true}
        linesGradient={[
          { r: 52/255,  g: 211/255, b: 153/255 },
          { r: 125/255, g: 211/255, b: 252/255 },
          { r: 167/255, g: 139/255, b: 250/255 },
          { r: 52/255,  g: 211/255, b: 153/255 },
        ]}
        enabledWaves={{ top: true, middle: true, bottom: true }}
      />

      {/* Content layers above WebGL canvas */}
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
