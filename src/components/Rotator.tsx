import { useState, useEffect } from 'react'

interface RotatorProps {
  items: string[]
  interval?: number
}

const Rotator = ({ items, interval = 3000 }: RotatorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (items.length <= 1) return

    const timer = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        setIsAnimating(false)
      }, 250) // Half of the transition duration
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, interval])

  if (items.length === 0) return null

  return (
    <span className="inline-block min-w-0 h-6 relative overflow-hidden">
      <span
        className={`block transition-all duration-500 ease-in-out transform ${
          isAnimating 
            ? '-translate-y-full opacity-0' 
            : 'translate-y-0 opacity-100'
        }`}
      >
        {items[currentIndex]}
      </span>
    </span>
  )
}

export default Rotator