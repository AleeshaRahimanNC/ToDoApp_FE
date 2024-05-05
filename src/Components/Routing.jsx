import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthHome from '../Pages/AuthHome/AuthHome'
import AuthPage from '../Pages/AuthPage/AuthPage'

function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<AuthHome/>} />
        <Route path='/authpage' element={<AuthPage/>} />
    </Routes>
    </>
  )
}

export default Routing