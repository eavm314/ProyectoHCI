import { IconTrash } from '@tabler/icons-react'
import React from 'react'

export const Carpeta = () => {
    return (
        <div className='group flex items-center
        text-4xl px-6 py-1
        hover:bg-rojito-2'>
            <button >
                Matemática
            </button>
            <button className='ml-auto invisible group-hover:visible hover:text-rojito-5'>
                <IconTrash />
            </button>
        </div>
    )
}
