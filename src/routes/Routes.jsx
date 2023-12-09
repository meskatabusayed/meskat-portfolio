import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";


  
export  const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Home></Home>,
      
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: 'portfolio',
      element: <Portfolio></Portfolio>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    }
    
  ]);