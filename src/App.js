import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Navbar from './components/base/navbar';
import { useEffect } from 'react';
import Aos from 'aos';
function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <BrowserRouter>
      <Navbar>
        
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;