import { useEffect, useState } from 'react'
import './App.css'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.addEventListener('resize', handleResize)

  }, [])

  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}
    </>
  )
}

export default App
