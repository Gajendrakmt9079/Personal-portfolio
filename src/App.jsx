import React from 'react'
import { Route  , BrowserRouter as Router , Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Loader from './components/Loader'

const App = () => {
  return (
  <main className='bg-white h-100vh'>
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/c' element={<Loader/>} /> */}
      </Routes>
    </Router>
  </main>
  )
}

export default App