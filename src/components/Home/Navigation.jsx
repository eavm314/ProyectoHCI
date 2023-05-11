import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconBellRinging, IconBellRingingFilled } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';

export const Navigation = () => {
    const [notification, setNotification] = useState(false);

    const changeState = () => {
        setNotification(!notification);
    };

    return (
        <div className='h-12 flex items-center bg-rojito-5 text-blanco'>

            <Link to={'/'} className='flex items-center ml-4'>
                <img className='h-8 w-8 bg-blanco rounded-full'
                    src="./rayito.png" alt="logo" />

                <h1 className='text-4xl ml-2 font-bold'>
                    ToDoNow
                </h1>
            </Link>

            <button className='ml-auto mr-14'
                onClick={changeState}>
                {notification ?
                    <IconBell size={32} /> :
                    <IconBellRingingFilled size={32} />}
            </button>

        </div>
    )
}
