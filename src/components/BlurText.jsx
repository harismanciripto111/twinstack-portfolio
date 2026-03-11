import { useRef, useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

const AnimatedWord = ({ word, delay, direction, stepDuration, onComplete }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1, rootMargin: '0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const fromY = direction === 'top' ? -20 : 20

  const spring = useSpring({
    from: { opacity: 0, filter: 'blur(10px)', transform: `translateY(${fromY}px)` },
    to: inView
      ? { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }
      : { opacity: 0, filter: 'blur(10px)', transform: `translateY(${fromY}px)` },
    delay: inView ? delay : 0,
    config: { duration: stepDuration * 1000 },
    onRest: onComplete,
  })

  return (
    <animated.span
      ref={ref}
      style={spring}
      className="inline-block will-change-transform"
    >
      {word === ' ' ? '\u00A0' : word}
    </animated.span>
  )
}

const BlurText = ({
  text = '',
  animateBy = 'words',
  direction = 'top',
  delay = 200,
  stepDuration = 0.35,
  className = '',
  onAnimationComplete,
}) => {
  const tokens = animateBy === 'words'
    ? text.split(' ').reduce((acc, word, i, arr) => {
        acc.push(word)
        if (i < arr.length - 1) acc.push(' ')
        return acc
      }, [])
    : text.split('')

  const completedRef = useRef(0)

  const handleWordComplete = () => {
    completedRef.current += 1
    if (completedRef.current === tokens.length && onAnimationComplete) {
      onAnimationComplete()
    }
  }

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {tokens.map((token, i) => (
        <AnimatedWord
          key={i}
          word={token}
          delay={i * delay}
          direction={direction}
          stepDuration={stepDuration}
          onComplete={handleWordComplete}
        />
      ))}
    </span>
  )
}

export default BlurText
