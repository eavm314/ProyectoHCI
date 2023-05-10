import { IconEdit } from '@tabler/icons-react'
import React from 'react'

export const Perfil = () => {   
  return (
    <button 
    className='group flex items-center 
    bg-rojito-2 m-2 p-4 rounded-xl
    transition
    focus:flex-col focus:justify-center'>
        <img 
        className='h-12 w-12 rounded-full 
        transition group-focus:w-1/2 group-focus:h-auto'
        src="./dory.png" alt="perfil" />

        <p className='text-4xl ml-2 mr-4 transition group-focus:mt-4 group-focus:text-5xl'>Dory</p>

        {/* <button className='ml-auto hover:text-rojito-5'>
            <IconEdit  size={28}/>
        </button> */}
    </button>
  )
}
