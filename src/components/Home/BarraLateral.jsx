import React from 'react'
import { Perfil } from './Perfil'
import { Categorias } from './Categorias'
import { IconTrash } from '@tabler/icons-react'

export const BarraLateral = () => {
  return (
    <div className='w-1/4 bg-rojito-1 flex flex-col'>
        <Perfil/>
        <Categorias/>

        <button className='m-6 p-2 mt-auto hover:text-rojito-5'>
            <IconTrash size={34}/>
        </button>
    </div>
  )
}
