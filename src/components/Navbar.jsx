import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <span className="font-mono text-sm font-medium tracking-widest">
        <span style={{ color: '#34d399' }}>TWIN</span>
        <span className="text-white/50">STACK</span>
      </span>

      {/* Center pill nav */}
      <div
        className={`hidden sm:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
          scrolled ? 'glass' : ''
        }`}
      >
        {['About', 'Nodes', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-1.5 rounded-full font-mono text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wider"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right — subtle status */}
      <div className="w-[80px] flex justify-end">
        <span
          className="font-mono text-[10px] tracking-widest"
          style={{ color: 'rgba(52,211,153,0.5)' }}
        >
          v1.0
        </span>
      </div>
    </nav>
  )
}

export default Navbar
