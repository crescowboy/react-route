import React, { useContext } from 'react'
import Login from '../paginas/Login'
import Context from '../contexto/Context'
import { Navigate } from 'react-router-dom';
import Router2 from './Router2';

const RutasPublicas = ({children}) => {
    const {logeado} = useContext(Context);

  return (logeado)
    ? <Router2/>
    : children
}

export default RutasPublicas
