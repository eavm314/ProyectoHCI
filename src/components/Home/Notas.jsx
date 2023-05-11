import React, { useState } from 'react'
import { Tarea } from './Tarea'
import { IconCirclePlus, IconSortAscending} from '@tabler/icons-react'

export const Notas = (props) => {

    const {nombreCarpeta, carpetasMap, setCarpetasMap} = props;
    // console.log(listaTareas);
    // Usar prop con map
    // const [listaTareas, setListaTareas] = useState([]);


    const [tarea, setTarea] = useState("");

    const guardarTarea = (event) => {
        event.preventDefault();
        console.log("registrando...");
        console.log(tarea);
        if ([tarea].includes("")) {
            return;
        }
        setCarpetasMap(carpetasMap.set(nombreCarpeta, [...carpetasMap.get(nombreCarpeta), tarea]));
        setTarea("");
    };


    return (
        <div className='w-3/4 px-10 py-6 overflow-auto pantalla'>
            <div className='flex items-center'>
                <h1 className='text-6xl font-bold'>{nombreCarpeta}</h1>
                <button className='ml-auto mr-6 hover:text-rojito-5' >
                    <IconSortAscending size={32} />
                </button>
            </div>

            {carpetasMap.get(nombreCarpeta).map((tarea) => (
                <Tarea contenido={tarea} />
            ))}

            <form 
            className='sticky bottom-0 w-full
            text-3xl text-white py-1 px-4 mt-10
            bg-rojito-5 rounded-lg
            flex items-center'
            onSubmit={guardarTarea}>

                <input placeholder="Añade una nueva tarea"
                    className='outline-none bg-transparent w-full'
                    type='text'
                    value={tarea}
                    onChange={(t) => setTarea(t.target.value)}/>
                <button type='submit'
                    className='ml-auto mr-2 active:text-rojito-3'>
                    <IconCirclePlus size={32} />
                </button>
            </form>
        </div>
    )
}
