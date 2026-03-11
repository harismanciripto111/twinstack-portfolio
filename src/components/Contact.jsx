import ShinyText from './ShinyText'

const links = [
  {
    label: 'Twitter / X',
    handle: '@twinstack',
    href: 'https://twitter.com/twinstack',
    icon: 'X',
    color: '#34d399',
  },
  {
    label: 'GitHub',
    handle: 'github.com/twinstack',
    href: 'https://github.com/twinstack',
    icon: 'GH',
    color: '#7dd3fc',
  },
  {
    label: 'Discord',
    handle: 'twinstack#0001',
    href: '#',
    icon: 'DC',
    color: '#a78bfa',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-36 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(52,211,153,0.7)' }}>
            contact
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(52,211,153,0.15), transparent)' }} />
        </div>

        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
            Let&apos;s{' '}
            <ShinyText text="Connect" speed={4} className="font-bold" />
          </h2>
          <p className="text-base leading-relaxed mb-16" style={{ color: 'rgba(71,85,105,0.9)' }}>
            Fellow node runner? Got a testnet tip or want to collaborate?
            Always down to talk crypto, AI, and infra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
            {links.map(({ label, handle, href, icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl w-full sm:w-auto transition-all duration-200"
                style={{
                  background: 'rgba(6,6,8,0.65)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  minWidth: '190px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${color}35`
                  e.currentTarget.style.background = `rgba(6,6,8,0.85)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(6,6,8,0.65)'
                }}
              >
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-mono text-sm font-bold shrink-0"
                  style={{ background: `${color}12`, color }}
                >
                  {icon}
                </span>
                <div className="text-left">
                  <div className="font-mono text-[10px] tracking-wider mb-0.5" style={{ color: '#334155' }}>
                    {label}
                  </div>
                  <div className="font-mono text-sm font-medium" style={{ color }}>
                    {handle}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="pt-10">
            <p className="font-mono text-[11px] tracking-widest" style={{ color: '#1e293b' }}>
              TWINSTACK EXPLORER &mdash; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
