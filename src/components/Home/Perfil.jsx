import { IconEdit } from '@tabler/icons-react'
import React from 'react'

export const Perfil = () => {
    return (
        <button
            className='group flex items-center 
            bg-rojito-3 m-2 px-4 py-2 rounded-xl
            focus:flex-col focus:justify-center focus:pt-4'>
            <img
                className='h-14 w-14 rounded-full 
                transition group-focus:w-1/2 group-focus:h-auto'
                src="./dory.png" alt="perfil" />

            <p className='text-4xl ml-2 mr-6 transition group-focus:mt-4 group-focus:text-5xl'>Dory</p>

        </button>
    )
}
