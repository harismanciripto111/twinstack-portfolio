import ShinyText from './ShinyText'

const stats = [
  { label: 'Testnets Run', value: '10+' },
  { label: 'Networks Validated', value: '7' },
  { label: 'Years in Crypto', value: '3+' },
  { label: 'Nodes Active', value: '4' },
]

const tags = ['Node Operator', 'Testnet Hunter', 'AI Explorer', 'Hobbyist Dev']

const About = () => {
  return (
    <section id="about" className="py-36 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(52,211,153,0.7)' }}>
            about
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(52,211,153,0.15), transparent)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left — bio text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Who is{' '}
              <ShinyText text="Twinstack?" speed={5} className="font-bold" />
            </h2>

            <div className="space-y-5 leading-relaxed" style={{ color: 'rgba(148,163,184,0.8)' }}>
              <p>
                Just a hobbyist deep in the trenches of blockchain infrastructure —
                spinning up nodes, validating testnets, and documenting every step
                of the journey.
              </p>
              <p>
                The name{' '}
                <span className="font-mono" style={{ color: '#34d399' }}>Twinstack</span>{' '}
                comes from running dual-stack node setups across multiple chains simultaneously.
                It started as a side project and turned into an obsession.
              </p>
              <p>
                Interested in the intersection of{' '}
                <span style={{ color: '#7dd3fc' }}>AI and crypto</span>{' '}
                — especially how AI tooling is reshaping node operations, monitoring,
                and on-chain analytics for solo validators.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-3 py-1 rounded-full"
                  style={{
                    color: '#64748b',
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(6,6,8,0.6)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  #{tag.toLowerCase().replace(' ', '_')}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stat grid with glass overlay */}
          <div
            className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="p-8 flex flex-col gap-2"
                style={{
                  background: 'rgba(6,6,8,0.75)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="text-5xl font-bold font-mono" style={{ color: '#34d399' }}>
                  {value}
                </div>
                <div className="font-mono text-xs tracking-wide" style={{ color: '#475569' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
