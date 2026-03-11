import ShinyText from './ShinyText'

const links = [
  {
    label: 'Twitter / X',
    handle: '@twinstack',
    href: 'https://twitter.com/twinstack',
    icon: 'X',
    color: '#00ff88',
  },
  {
    label: 'GitHub',
    handle: 'github.com/twinstack',
    href: 'https://github.com/twinstack',
    icon: 'GH',
    color: '#00e5ff',
  },
  {
    label: 'Discord',
    handle: 'twinstack#0001',
    href: '#',
    icon: 'DC',
    color: '#7c6bdb',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[#00ff88] tracking-widest uppercase">// contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's{' '}
            <ShinyText text="Connect" speed={4} className="font-bold" />
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Fellow node runner? Got a testnet tip or want to collaborate?
            Reach out anywhere below. Always down to talk crypto, AI, and infra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {links.map(({ label, handle, href, icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center gap-4 glass rounded-2xl px-6 py-4 hover:scale-105 transition-transform group min-w-[200px]"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0"
                  style={{ background: `${color}18`, color }}
                >
                  {icon}
                </span>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-mono">{label}</div>
                  <div
                    className="text-sm font-mono font-semibold group-hover:text-white transition-colors"
                    style={{ color }}
                  >
                    {handle}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-white/5 pt-12">
            <p className="font-mono text-xs text-gray-600 tracking-wider">
              BUILT BY TWINSTACK &mdash; RUNNING ON VIBES + NODES
            </p>
            <p className="font-mono text-xs text-gray-700 mt-2">
              &copy; 2026 Twinstack Explorer
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
