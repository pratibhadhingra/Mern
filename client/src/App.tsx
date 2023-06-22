import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/about' element={<About/>}/>  
        <Route path='/contact' element={<Contact/>}/>  
        <Route path='/login' element={<Login/>}/>  
        <Route path='/signup' element={<Signup/>}/>  
        <Route path="*" element={<Error/>}/>  
        
      </Routes>
    </div>
  );
}

export default App;
