import BlurText from './BlurText'
import ShinyText from './ShinyText'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Single subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(52,211,153,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-white/8 bg-white/[0.02]">
          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#34d399' }} />
          <span className="font-mono text-[11px] text-slate-400 tracking-[0.18em] uppercase">
            Crypto &amp; AI Enthusiast
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-6 text-white">
          <BlurText
            text="Twinstack"
            animateBy="words"
            direction="top"
            delay={100}
            stepDuration={0.45}
            className="block"
          />
          <BlurText
            text="Explorer"
            animateBy="words"
            direction="top"
            delay={180}
            stepDuration={0.45}
            className="block"
            style={{ color: '#34d399' }}
          />
        </h1>

        {/* Tagline */}
        <p className="text-slate-500 text-base sm:text-lg font-light max-w-lg mx-auto leading-relaxed mb-12">
          Documenting the journey of running nodes across blockchain testnets —
          one chain at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#nodes"
            className="px-8 py-3 rounded-full font-mono text-sm font-medium tracking-wider transition-all duration-200"
            style={{
              background: 'rgba(52,211,153,0.1)',
              color: '#34d399',
              border: '1px solid rgba(52,211,153,0.25)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(52,211,153,0.16)'
              e.currentTarget.style.borderColor = 'rgba(52,211,153,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(52,211,153,0.1)'
              e.currentTarget.style.borderColor = 'rgba(52,211,153,0.25)'
            }}
          >
            View Nodes
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full font-mono text-sm tracking-wider text-slate-400 hover:text-white transition-colors duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(52,211,153,0.6), transparent)' }} />
        <span className="font-mono text-[9px] text-slate-600 tracking-[0.2em]">SCROLL</span>
      </div>
    </section>
  )
}

export default Hero
