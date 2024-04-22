import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Login } from './Components/Login';
import { Dashboard } from './Components/Dashboard';
import { Register } from './Components/Register';
export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/dash" element={<Dashboard/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

