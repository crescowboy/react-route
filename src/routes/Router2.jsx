import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CP from '../paginas/CP'
import NO from '../paginas/NO'
import NavBar from '../navBar/NavBar'
import Comprar from '../paginas/Comprar'
import Miviaje from '../paginas/Miviaje'

const Router2 = () => {
  return (
    <>
    <NavBar></NavBar>
      <Routes>
            <Route path='cp' element={<CP/>}></Route>
            <Route path='no' element={<NO/>}></Route>
            <Route path='viaje' element={<Miviaje/>}></Route>
            <Route path='destino/:nombre' element={<Comprar/>}></Route>
            <Route path='/*' element={<Navigate to="cp"/>}></Route>
      </Routes>
    </>
  )
}

export default Router2
