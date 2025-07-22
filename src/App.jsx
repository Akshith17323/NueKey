import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './Components/Landing'
import Herosection from './Components/Herosection'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <main className="bg-[url('src/Assests/Key_to_a_door.jpg')] bg-cover bg-center h-screen overflow-auto hide-scrollbar ">
      <Router>
        <Navbar/>

          <Routes>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/hero' element={<Herosection/>}></Route>
          </Routes>

        
      </Router>
      
        
    </main>
  )
}

export default App
