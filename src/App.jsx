import Footer from './components/Footer/Footer'
import Contact from './components/HomeSection/Contact/Contact'
import Project from './components/HomeSection/Project/Project'
import Service from './components/HomeSection/Service/Service'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './PortfolioPage/Portfolio'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <div className='con'>
    <Navbar/>
    <Routes>
      <Route path='/CVPortfolio002' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
