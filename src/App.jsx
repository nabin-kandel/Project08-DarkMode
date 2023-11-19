import React from 'react'

import Navbar from './assets/components/Navbar'
import Body from './assets/components/Body.jsx'
function App() {
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <Body darkMode={darkMode} />
      </div>)
}

export default App