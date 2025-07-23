import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './Components/Landing'
import HeroSection from './Components/Herosection';
import Navbar from './Components/Navbar';
import PropertyDetails from './Components/PropertyDetails';
import ContactUs from './Components/ContactUs'
import SignIn from './Components/SignIn';
import Login from './Components/Login'
import AboutUs from './Components/AboutUs';

function App() {

  return (
    <main className="bg-[url('/Key_to_a_door.jpg')] bg-cover bg-center h-screen overflow-auto hide-scrollbar ">
      <Router>
        <Navbar/>

          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/hero' element={<HeroSection/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/propertydetails' element={<PropertyDetails/>}/>
          </Routes>

      </Router>
      
        
    </main>
  )
}

export default App
