
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Navbar  />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/sign-up' element={<SignUp/>} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
 