import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return (
        <div className='h-screen bg-rojito-3 flex justify-center items-center'>
            <div className='text-center w-1/2 z-10'>
                <h1 className='font-bold text-8xl'>ToDoNow</h1>
                <p className='text-3xl'>Domina tu lista de tareas con ToDoNow, la forma más sencilla y efectiva de organizar tus pendientes. Ya sea para trabajo, estudio o actividades cotidianas, ToDoNow te permite mantener todo en un solo lugar, con recordatorios personalizados, tareas recurrentes y mucho más. Descubre cómo aumentar tu productividad y reducir el estrés con ToDoNow.</p>
                <br />

                <p className='text-3xl'>¡Únete a la comunidad de usuarios satisfechos hoy mismo!</p>

                <br />

                <Link to='/login'
                    className='bg-rojito-4 text-white 
                    rounded-md hover:bg-rojito-5
                    shadow-sm shadow-negro 
                    pl-4 pr-6 py-2
                    text-4xl '>
                    Continuar
                </Link>
            </div>

            <div className="custom-shape-divider-bottom-1683609033">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
};
