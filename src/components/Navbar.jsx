import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-mono text-sm text-[#00ff88] font-semibold tracking-widest">
          TWINSTACK<span className="text-white/40">.EXP</span>
        </span>
        <div className="hidden sm:flex items-center gap-8">
          {['About', 'Nodes', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs text-gray-400 hover:text-[#00ff88] transition-colors tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] pulse-dot" />
          <span className="font-mono text-xs text-gray-500">online</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
