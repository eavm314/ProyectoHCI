import { IconEdit } from '@tabler/icons-react'
import React from 'react'

export const Perfil = () => {   
  return (
    <button 
    className='group flex items-center bg-rojito-2 m-2 p-4 rounded-xl
    hover:flex-col hover:justify-center'>
        <img 
        className='h-12 w-12 rounded-full 
        group-hover:w-1/2 group-hover:h-auto'
        src="./public/dory.png" alt="perfil" />

        <p className='text-4xl ml-2 mr-4 group-hover:mt-4 group-hover:text-5xl'>Dory</p>

        {/* <button className='ml-auto hover:text-rojito-5'>
            <IconEdit  size={28}/>
        </button> */}
    </button>
  )
}
