import BlurText from './BlurText'
import ShinyText from './ShinyText'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden px-6">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00e5ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] pulse-dot" />
          <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">
            Crypto &amp; AI Enthusiast
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
          <BlurText
            text="Twinstack"
            animateBy="words"
            direction="top"
            delay={120}
            stepDuration={0.4}
            className="block"
          />
          <BlurText
            text="Explorer"
            animateBy="words"
            direction="top"
            delay={200}
            stepDuration={0.4}
            className="block mt-1"
          />
        </h1>

        <div className="mb-10">
          <ShinyText
            text="Documenting the journey of running nodes on various blockchain testnets"
            speed={4}
            className="text-lg sm:text-xl font-mono font-medium"
          />
        </div>

        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12">
          A hobbyist crypto explorer participating in testnet programs,
          validating networks and chasing those sweet incentives.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#nodes"
            className="px-8 py-3 rounded-lg bg-[#00ff88] text-black font-mono text-sm font-bold tracking-wider hover:bg-[#00e5ff] transition-colors glow-green"
          >
            VIEW NODES
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg glass font-mono text-sm text-gray-300 tracking-wider hover:text-[#00ff88] transition-colors"
          >
            ABOUT ME
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00ff88] to-transparent" />
      </div>
    </section>
  )
}

export default Hero
