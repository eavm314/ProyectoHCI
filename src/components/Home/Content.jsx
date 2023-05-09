import React, { useState } from "react";
import { BarraLateral } from "./BarraLateral";
import { Notas } from "./Notas";

export const Content = () => {
  return (
    <div className="flex">
      <BarraLateral/>
      <Notas/>
    </div>
  );
};
