import { IconPlus } from '@tabler/icons-react'
import React from 'react'
import { Carpeta } from './Carpeta'

export const Categorias = () => {
    return (
        <div>
            <div className='flex items-center 
            px-6 py-1 mt-4 
            text-5xl font-bold 
            hover:bg-rojito-2'>
                <button>
                    Categorías
                </button>
                <button className='ml-auto hover:text-rojito-5' >
                    <IconPlus size={32} />
                </button>
            </div>

            <Carpeta />

        </div>
    )
}
