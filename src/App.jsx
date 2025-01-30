import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <NavMenu></NavMenu>
        <LinkRoutes></LinkRoutes>
        <Footer></Footer>
      </Routes>
    </BrowserRouter>
  )
}

export default App
