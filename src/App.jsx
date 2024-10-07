import { useState } from 'react'
import './App.css'
import Sidenav from './sidenav'
import Navbar from './navbar'
import DonationHistory from './history'
import NotificationPanel from './notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Sidenav/> 
    
     
    </>
  )
}

export default App
