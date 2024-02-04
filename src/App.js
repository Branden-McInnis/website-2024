import './App.css';

import { BrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

import Navbar from './components/Navbar';
import Typed from './components/Typed';
import Abouts from './components/short-about-me';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Typed />
    <Abouts />
   </BrowserRouter>
  );
}

export default App;
