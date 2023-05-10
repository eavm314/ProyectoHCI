import { IconTrash } from '@tabler/icons-react'
import React from 'react'

export const Carpeta = (props) => {
    const {nombre, carpetaActual, setCarpetaActual} = props;
    return (
        
        <div className={'group flex items-center text-4xl px-6 py-1 hover:bg-rojito-2 ' + 
        (nombre === carpetaActual? "bg-rojito-2": "bg-rojito-1")}
        // style={{backgroundColor: nombre === carpetaActual? '#EBB2AD':'#F5D9D6', backgroundColor:hover: '#EBB2AD'}}
        // onMouseOut={this.style.backgroundColor=nombre === carpetaActual? '#EBB2AD':'#F5D9D6'}
        // onMouseOver={this.style.backgroundColor='#EBB2AD'}
        >
            <button 
                onClick={()=>{setCarpetaActual(nombre)}}>
                {nombre}
            </button>

            <button className='ml-auto invisible group-hover:visible hover:text-rojito-5'>
                <IconTrash />
            </button>
        </div>
    )
}
