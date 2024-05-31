import React, { useState } from 'react';
export const Ejercicio2: React.FC = () => {
  const [arreglo, setArreglo] = useState<number[]>([]);
  const [suma, setSuma] = useState<number | null>(null);
  const sumarElementosArreglo = (numeros: number[]): number => {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  };
  const handleInput = () => {
    const arregloStr = prompt("Ingrese los elementos del arreglo separados por comas:");
    if (arregloStr !== null) {
      const numeros = arregloStr.split(',').map(num => parseFloat(num.trim()));
      if (numeros.some(isNaN)) {
        alert("Por favor, ingrese un arreglo de números válidos.");
      } else {
        setArreglo(numeros);
        setSuma(sumarElementosArreglo(numeros));
      }
    } else {
      alert("No se ingresó ningún valor.");
    }
  };
  return (
    <div>
      <button onClick={handleInput}>Ingresar Arreglo</button>
      {suma !== null && (
        <p>La suma de los elementos del arreglo {JSON.stringify(arreglo)} es {suma}</p>
      )}
    </div>
  );
};

