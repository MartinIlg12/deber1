import React, { useState } from 'react';
export const Ejercicio4: React.FC = () => {
  const numeros = [1, 2, 3, 4];
  const [nuevoArreglo, setNuevoArreglo] = useState<string[]>([]);
  const identificarParImpar = (numeros: number[]): string[] => {
    return numeros.map(numero => (numero % 2 === 0 ? 'par' : 'impar'));
  };
  const handleIdentificacion = () => {
    setNuevoArreglo(identificarParImpar(numeros));
  };
  return (
    <div>
        <h3>Transforma este arreglo par o impar según corresponda</h3>
        <p>[1, 2, 3, 4]</p>
      <button onClick={handleIdentificacion}>Identificar Par/Impar</button>
      {nuevoArreglo.length > 0 && (
        <p>Nuevo arreglo: {JSON.stringify(nuevoArreglo)}</p>
      )}
    </div>
  );
};
