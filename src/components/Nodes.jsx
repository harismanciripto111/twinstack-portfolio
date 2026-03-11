const nodes = [
  {
    name: 'Ritual',
    chain: 'Ritual Testnet',
    description: 'Running an Infernet node on the Ritual testnet. Participating in the decentralized AI compute network.',
    status: 'active',
    type: 'AI / Infernet',
    reward: 'Incentivized',
  },
  {
    name: 'Alignerd',
    chain: 'Alignerd Testnet',
    description: 'Validator node on the Alignerd network. Exploring aligned AI inference on-chain.',
    status: 'active',
    type: 'AI / Validator',
    reward: 'Incentivized',
  },
  {
    name: 'Aztec',
    chain: 'Aztec Testnet',
    description: 'Running a sequencer node on the Aztec privacy L2 testnet. ZK-powered privacy transactions.',
    status: 'active',
    type: 'L2 / ZK',
    reward: 'Incentivized',
  },
  {
    name: 'Story Protocol',
    chain: 'Story Testnet',
    description: 'Validator on the Story Protocol network — IP ownership and licensing on-chain.',
    status: 'active',
    type: 'L1 / Validator',
    reward: 'Incentivized',
  },
  {
    name: 'Waku',
    chain: 'Waku Network',
    description: 'P2P messaging node for the decentralized Waku communication protocol.',
    status: 'active',
    type: 'Infra / P2P',
    reward: 'Non-incentivized',
  },
  {
    name: 'Nulink',
    chain: 'Nulink Testnet',
    description: 'Running a Staking Provider node for privacy-preserving computation and data sharing.',
    status: 'ended',
    type: 'Privacy / Node',
    reward: 'Incentivized',
  },
  {
    name: 'Nillion',
    chain: 'Nillion Testnet',
    description: 'Verifier node on the Nillion network for blind computation and secret sharing.',
    status: 'ended',
    type: 'Privacy / Verifier',
    reward: 'Incentivized',
  },
  {
    name: 'Lava Network',
    chain: 'Lava Testnet',
    description: 'Provider node on the Lava RPC marketplace — serving endpoints for multiple chains.',
    status: 'ended',
    type: 'RPC / Provider',
    reward: 'Incentivized',
  },
]

const statusConfig = {
  active:   { label: 'Active',   cls: 'status-active' },
  ended:    { label: 'Ended',    cls: 'status-ended' },
  upcoming: { label: 'Upcoming', cls: 'status-upcoming' },
}

const NodeCard = ({ node }) => {
  const { label, cls } = statusConfig[node.status]
  return (
    <div
      className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-200"
      style={{
        background: 'rgba(6,6,8,0.65)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(52,211,153,0.22)'
        e.currentTarget.style.background = 'rgba(6,6,8,0.82)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.background = 'rgba(6,6,8,0.65)'
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold text-base">{node.name}</h3>
          <p className="font-mono text-[11px] mt-0.5" style={{ color: '#475569' }}>{node.chain}</p>
        </div>
        <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full shrink-0 ${cls}`}>
          {label}
        </span>
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(100,116,139,0.9)' }}>
        {node.description}
      </p>

      <div
        className="flex items-center justify-between pt-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span className="font-mono text-[11px]" style={{ color: '#7dd3fc' }}>{node.type}</span>
        <span className="font-mono text-[11px]" style={{ color: '#334155' }}>{node.reward}</span>
      </div>
    </div>
  )
}

const Nodes = () => {
  const activeNodes = nodes.filter(n => n.status === 'active')
  const endedNodes  = nodes.filter(n => n.status === 'ended')

  return (
    <section id="nodes" className="py-36 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(52,211,153,0.7)' }}>
            nodes
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(52,211,153,0.15), transparent)' }} />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Testnet Nodes</h2>
        <p className="mb-16 max-w-lg text-base" style={{ color: 'rgba(71,85,105,0.9)' }}>
          A running log of every testnet and blockchain network participated in.
        </p>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#34d399' }} />
            <span className="font-mono text-xs tracking-wider" style={{ color: '#94a3b8' }}>Currently Running</span>
            <span
              className="font-mono text-[10px] px-2 py-0.5 rounded-full"
              style={{ color: '#34d399', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.15)' }}
            >
              {activeNodes.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeNodes.map(node => <NodeCard key={node.name} node={node} />)}
          </div>
        </div>

        <div className="opacity-55">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#334155' }} />
            <span className="font-mono text-xs tracking-wider" style={{ color: '#475569' }}>Past Testnets</span>
            <span
              className="font-mono text-[10px] px-2 py-0.5 rounded-full"
              style={{ color: '#475569', background: 'rgba(71,85,105,0.1)', border: '1px solid rgba(71,85,105,0.2)' }}
            >
              {endedNodes.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {endedNodes.map(node => <NodeCard key={node.name} node={node} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Nodes
