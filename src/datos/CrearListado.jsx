import React from 'react'
import data from './data'
import Destino from '../paginas/Destino'

const CrearListado = ({zona}) => {
    const listado = data.filter(destino => destino.zona === zona)
    
  return (
    <>
    <section className='lista'>
        {listado.map(dato=>
                (<Destino key={dato.nombre}{...dato}></Destino>)
            )}
    </section>
      
    </>
  )
}

export default CrearListado
