import { IconGripVertical } from '@tabler/icons-react'
import React from 'react'

export const Tarea = (props) => {
    const { contenido } = props;
    return (
        <div className='flex items-center 
        px-6 py-2 my-4 
        border-2 border-negro rounded-xl'>

            <input type="checkbox" name="done"
                className='h-9 w-9 appearance-none 
                border-4 rounded-full 
                border-prioridad-baja-hecho bg-prioridad-baja-no-hecho
                checked:bg-prioridad-baja-hecho'/>

            <p className='text-3xl ml-4'>{contenido}</p>

            <IconGripVertical className='ml-auto' size={32} />
        </div>
    )
}
