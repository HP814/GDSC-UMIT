import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Team from './Components/Team/Team';
import Blogs from './Components/Blogs/Blogs';
import Testimonials from './Components/Testimonials/Testimonials';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Whatsapp from './Components/Whatsapp/Whatsapp';

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
      <About id={'about'} theme={theme} setTheme={setTheme}/>
    </div>
    <div>
      <Team id={'team'} theme={theme} setTheme={setTheme}/>
    </div>
    <div>
      <Testimonials id={'testimonials'} theme={theme} setTheme={setTheme}/>
    </div>
    <div>
      <Blogs id={'blogs'} theme={theme} setTheme={setTheme}/>
    </div>
    <div>
      <Contacts id={'contacts'} theme={theme} setTheme={setTheme}/>
    </div>
    <Whatsapp/>
    </div>
  )
}

export default App