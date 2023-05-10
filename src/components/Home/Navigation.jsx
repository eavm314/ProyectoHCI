import { IconBellRinging } from '@tabler/icons-react'
import React from 'react'

export const Navigation = () => {
    return (
        <div className='h-12 flex items-center bg-rojito-5 text-blanco'>

            <img className='h-9 w-9 ml-4 bg-blanco rounded-full'
                src="./public/rayito.png" alt="logo" />
    
            <h1 className='text-4xl ml-4 font-bold'>
                ToDoNow
            </h1>
            <IconBellRinging className='ml-auto mr-14' size={32}/>

        </div>
    )
}
