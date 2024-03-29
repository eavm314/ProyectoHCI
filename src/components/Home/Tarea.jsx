import { IconGripVertical } from '@tabler/icons-react'
import React from 'react'

export const Tarea = (props) => {
    const { contenido } = props;
    return (
        <div className='flex items-center 
        px-6 py-2 my-4 rounded-xl
        border-2 border-negro hover:bg-blanco transition duration-300'>

            <input type="checkbox" name="done"
                className='h-9 w-9 appearance-none 
                border-4 rounded-full 
                border-prioridad-baja-hecho bg-prioridad-baja-no-hecho
                checked:bg-prioridad-baja-hecho'/>

            <p className='text-3xl ml-4'>{contenido}</p>
            {/* <input className='outline-none bg-transparent text-3xl ml-4 w-full' value={contenido} /> */}

            <IconGripVertical className='ml-auto cursor-grab' size={32} />
        </div>
    )
}
