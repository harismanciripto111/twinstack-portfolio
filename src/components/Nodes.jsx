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
  active: { label: 'ACTIVE', class: 'status-active' },
  ended: { label: 'ENDED', class: 'status-ended' },
  upcoming: { label: 'UPCOMING', class: 'status-upcoming' },
}

const NodeCard = ({ node }) => {
  const status = statusConfig[node.status]
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300 group">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-bold text-lg group-hover:text-[#00ff88] transition-colors">
            {node.name}
          </h3>
          <p className="font-mono text-xs text-gray-500 mt-0.5">{node.chain}</p>
        </div>
        <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full shrink-0 ${status.class}`}>
          {status.label}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">{node.description}</p>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
        <span className="font-mono text-xs text-[#00e5ff]">{node.type}</span>
        <span className="font-mono text-xs text-gray-600">{node.reward}</span>
      </div>
    </div>
  )
}

const Nodes = () => {
  const activeNodes = nodes.filter((n) => n.status === 'active')
  const endedNodes = nodes.filter((n) => n.status === 'ended')

  return (
    <section id="nodes" className="py-32 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-[#00ff88] tracking-widest uppercase">// nodes</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Testnet <span className="text-[#00ff88]">Nodes</span>
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl">
          A running log of every testnet and blockchain network I've participated in.
          Updated as new programs launch.
        </p>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] pulse-dot" />
            <span className="font-mono text-sm text-gray-400">Currently Running</span>
            <span className="font-mono text-xs text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded-full">
              {activeNodes.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeNodes.map((node) => (
              <NodeCard key={node.name} node={node} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            <span className="font-mono text-sm text-gray-400">Past Testnets</span>
            <span className="font-mono text-xs text-gray-500 bg-gray-500/10 px-2 py-0.5 rounded-full">
              {endedNodes.length}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-70">
            {endedNodes.map((node) => (
              <NodeCard key={node.name} node={node} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nodes
