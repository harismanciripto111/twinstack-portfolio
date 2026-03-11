const ShinyText = ({ text = '', className = '', speed = 4, disabled = false }) => {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        background: disabled
          ? 'none'
          : 'linear-gradient(120deg, #00ff88 0%, #00e5ff 20%, #ffffff 40%, #00e5ff 60%, #00ff88 80%, #00e5ff 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: disabled ? 'unset' : 'text',
        backgroundClip: disabled ? 'unset' : 'text',
        WebkitTextFillColor: disabled ? 'unset' : 'transparent',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
        color: disabled ? 'inherit' : 'transparent',
      }}
    >
      {text}
    </span>
  )
}

export default ShinyText
