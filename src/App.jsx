import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');

  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme',theme)
  },[theme])

  return (
    <div className={`container ${theme}`}>
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
    <div>
      <Team/>
    </div>
    <div>
      <Testimonials theme={theme} setTheme={setTheme}/>
    </div>
    </div>
  )
}

export default App