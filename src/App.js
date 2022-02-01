import React from 'react';
import './App.css'
import Home from './Component/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Generator } from './Component/Generator';
import Login from './Component/Login';

 const App=() => {
  
  return (

   <BrowserRouter>
     <Routes>

       <Route  exact path='/' element={<Login/>}></Route>
       <Route path='/home' element={<Home />}>
        
       </Route>

       <Route path='/generated' element={  <Generator />}>
       
       </Route>
       </Routes>
   </BrowserRouter>
  );
}

export default App;