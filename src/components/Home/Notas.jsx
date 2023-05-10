import React, { useState } from 'react'
import { Tarea } from './Tarea'
import { IconCirclePlus } from '@tabler/icons-react'

export const Notas = () => {
    const [listaTareas, setListaTareas] = useState([])
    const [tarea, setTarea] = useState("");

    const guardarTarea = (event) => {
        event.preventDefault();
        console.log("registrando...");
        console.log(tarea);
        if ([tarea].includes("")) {
            return;
        }
        setListaTareas([...listaTareas, { contenido: tarea }])
        setTarea("")
    };


    return (
        <div className='w-3/4 px-10 py-6 overflow-auto pantalla'>
            <h1 className='text-6xl font-bold'>Contaduría 1</h1>

            {listaTareas.map((tarea) => (
                <Tarea contenido={tarea.contenido} />
            ))}

            <form 
            className='sticky bottom-0 w-full
            text-3xl text-white py-1 px-4
            bg-rojito-5 rounded-lg
            flex items-center'
            onSubmit={guardarTarea}>

                <input placeholder="Añade una nueva tarea"
                    className='outline-none bg-transparent w-full'
                    type='text'
                    value={tarea}
                    onChange={(t) => setTarea(t.target.value)}/>
                <button type='submit'
                    className='ml-auto active:text-rojito-3'>
                    <IconCirclePlus size={32} />
                </button>
            </form>
        </div>
    )
}
