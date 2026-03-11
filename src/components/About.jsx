import ShinyText from './ShinyText'

const stats = [
  { label: 'Testnets Run', value: '10+' },
  { label: 'Networks Validated', value: '7' },
  { label: 'Years in Crypto', value: '3+' },
  { label: 'Nodes Active', value: '4' },
]

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[#00ff88] tracking-widest uppercase">// about</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Who is{' '}
              <ShinyText text="Twinstack?" speed={5} className="font-bold" />
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Just a hobbyist deep in the trenches of blockchain infrastructure —
                spinning up nodes, validating testnets, and documenting every step
                of the journey.
              </p>
              <p>
                The name <span className="text-[#00ff88] font-mono">Twinstack</span> comes
                from running dual-stack node setups across multiple chains simultaneously.
                It started as a side project and turned into an obsession.
              </p>
              <p>
                Interested in the intersection of <span className="text-[#00e5ff]">AI and crypto</span> —
                especially how AI tooling is reshaping node operations, monitoring,
                and on-chain analytics for solo validators.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Node Operator', 'Testnet Hunter', 'AI Explorer', 'Hobbyist Dev'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full glass text-gray-400"
                >
                  #{tag.toLowerCase().replace(' ', '_')}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value }) => (
              <div key={label} className="glass rounded-2xl p-6 glow-green group cursor-default">
                <div className="text-4xl font-bold font-mono text-[#00ff88] mb-2 group-hover:text-[#00e5ff] transition-colors">
                  {value}
                </div>
                <div className="text-sm text-gray-500 font-mono tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
