import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from "./Components/Signup"
import Login from "./Components/Login"
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route element={<SignUp/>}  path='/'></Route>
      <Route element={<Login/>}  path='/login'></Route>
      <Route element={<Home/>}  path='/home/:id'></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;