import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Navbar from './components/base/navbar';
import { useEffect } from 'react';
import Aos from 'aos';
import Footer from './components/base/footer';
import Menu from './pages/menu';
import Event from './pages/events';
import Gallery from './pages/gallery';
import About from './pages/about';
import Reservation from './pages/reservation';
function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <BrowserRouter>
    <div className='overflow-x-hidden'>
      <Navbar>
        
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
      <Footer>

      </Footer>
    </div>

    </BrowserRouter>
  );
}

export default App;
