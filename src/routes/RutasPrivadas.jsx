import React, { useContext } from 'react'
import Context from '../contexto/Context'
import { Navigate } from 'react-router-dom';

const RutasPrivadas = ({children}) => {
    const {logeado} = useContext(Context);
  return (logeado)
    ? children
    :<Navigate to="/login"></Navigate>
}

export default RutasPrivadas
