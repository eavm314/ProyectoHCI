import { IconEdit } from '@tabler/icons-react'
import React from 'react'

export const Perfil = () => {   
  return (
    <div className='h-16 flex items-center bg-rojito-2 m-2 px-4 rounded-xl'>
        <img className='h-12 w-12 rounded-full'
        src="./public/dory.png" alt="perfil" />

        <p className='text-4xl ml-2'>Dory</p>
        <button className='ml-auto hover:text-rojito-5'>
            <IconEdit  size={28}/>
        </button>
    </div>
  )
}
