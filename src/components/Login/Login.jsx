import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-blanco'>
            <div className="w-3/4 text-2xl max-w-screen-sm">
                <h1 className="font-bold text-6xl text-center">
                    ¿Listo para iniciar?
                </h1>
                <p className="text-center text-3xl my-4">
                    Con nuestra aplicación nunca volverás a olvidar una tarea importante. Organiza tu vida con facilidad y eficiencia gracias a nuestra intuitiva interfaz de usuario y funcionalidades.
                </p>
                <form className="px-10 py-6 rounded-lg shadow-lg mx-16 mt-2 border-2">
                    <h1 className='text-5xl font-bold mb-4'>Crear cuenta</h1>
                    <input
                        placeholder="Nombre"
                        className="border-2 w-full my-2 p-1 md:w-1/2 outline-none"
                    />

                    <input
                        placeholder="Apellido"
                        className="border-2 w-full my-2 p-1 md:w-1/2 md:border-l-0 outline-none"
                    />

                    <input
                        placeholder="Correo electrónico outline-none"
                        className="border-2 w-full my-2 p-1"
                    />

                    <input
                        placeholder="Contraseña"
                        className="border-2 w-full mt-2 mb-6 p-1 outline-none"
                    />

                    <Link to='/home'
                        className='bg-rojito-4 text-white 
            rounded-md hover:bg-rojito-5
            shadow-sm shadow-negro 
            pl-4 pr-6 py-1
            text-3xl'>
                        Registrar
                    </Link>
                </form>
            </div>
        </div>
    )
}
