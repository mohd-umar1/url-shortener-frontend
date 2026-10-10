import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import linklogo from './assets/linklogo.png'
import './App.css'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Landingpage from '../components/landingpage'
import Header from '../components/header'
import Footer from '../components/footer'
import About from '../components/about'
import Contact from '../components/contact'
import Login from '../components/login'
import Register from '../components/register'
import Services from '../components/services'
import Privacy from '../components/privacy'
import Transition from '../components/pagetransition'
import User from "../components/user"
import Dashboard from "../components/dashboard/dashboardlayout"
import Shorten_URL from "../components/shorten_url"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col">
      <BrowserRouter>
      <Header/>
      <main className="flex-1">
      <Routes>
        <Route path='/' element = {<Transition><Landingpage/></Transition>}></Route>
        <Route path='/about' element = {<Transition><About/></Transition>}></Route>
        <Route path='/contact' element={<Transition><Contact/></Transition>}></Route>
        <Route path='/login' element={<Transition><Login/></Transition>}></Route>
        <Route path='/services' element={<Transition><Services/></Transition>}></Route>
        <Route path='/register' element={<Transition><Register/></Transition>}></Route>
        <Route path='/privacy-policy' element={<Transition><Privacy/></Transition>}></Route>
        <Route path='/user' element={<Transition><User/></Transition>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/shorten_url' element={<Transition><Shorten_URL/></Transition>}></Route>
        
      </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
