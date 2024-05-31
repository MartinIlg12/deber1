import React, { useState } from 'react';
export const Ejercicio3: React.FC = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const [nuevoArreglo, setNuevoArreglo] = useState<number[]>([]);
  const dividirPorCinco = (numeros: number[]): number[] => {
    return numeros.map(numero => numero / 5);
  };
  const handleDivision = () => {
    setNuevoArreglo(dividirPorCinco(arreglo));
  };
  return (
    <div>
      <button onClick={handleDivision}>Dividir elementos por 5</button>
      {nuevoArreglo.length > 0 && (
        <p>Nuevo arreglo: {JSON.stringify(nuevoArreglo)}</p>
      )}
    </div>
  );
};

