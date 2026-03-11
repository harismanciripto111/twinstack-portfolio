import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Nodes from './components/Nodes'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Nodes />
        <Contact />
      </main>
    </div>
  )
}

export default App
