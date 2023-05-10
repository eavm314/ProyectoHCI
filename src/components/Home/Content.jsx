import React, { useState } from "react";
import { BarraLateral } from "./BarraLateral";
import { Notas } from "./Notas";

export const Content = () => {
    const [carpetaActual, setCarpetaActual] = useState("Default")
    const [carpetasMap, setCarpetasMap] = useState(
        new Map().set("Default", ["¡Hola y bienvenid@ a ToDoNow!", "Comienza creando una nueva tarea"])
                .set("Matemática", [])
                .set("Física", [])
                .set("Contaduría", [])
    );

    return (
        <div className="flex">
            <BarraLateral 
            listaCarpetas={[...carpetasMap.keys()]} 
            carpetaActual={carpetaActual} 
            setCarpetaActual={setCarpetaActual} />

            <Notas 
            nombreCarpeta={carpetaActual} 
            carpetasMap={carpetasMap} 
            setCarpetasMap={setCarpetasMap}/>
        </div>
    );
};
