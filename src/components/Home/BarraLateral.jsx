import React from 'react'
import { Perfil } from './Perfil'
import { Carpeta } from './Carpeta'
import { IconTrash, IconPlus } from '@tabler/icons-react'


export const BarraLateral = (props) => {
    const { listaCarpetas, carpetaActual, setCarpetaActual } = props;
    console.log(listaCarpetas);
    return (
        <div className='w-1/4 min-w-min bg-rojito-1 flex flex-col'>
            <Perfil />

            <div className='flex items-center 
            pl-6 py-1 mt-4 
            text-5xl font-bold 
            hover:bg-rojito-2'>
                <button className='w-full text-start'>
                    Categorías
                </button>
                <button className='p-1 mx-2 hover:text-rojito-5' >
                    <IconPlus size={32} />
                </button>
            </div>

            {listaCarpetas.map((c) => (
                <Carpeta nombre={c} carpetaActual={carpetaActual} setCarpetaActual={setCarpetaActual}/>
            ))}

            <button className='m-6 p-2 mt-auto hover:text-rojito-5'>
                <IconTrash size={34} />
            </button>
        </div>
    )
}
