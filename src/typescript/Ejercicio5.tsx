import React, { useState } from 'react';
export const Ejercicio5: React.FC = () => {
  const datos = [7, 5, "sistemas", "hola", "adios", 2];
  const [mayorTexto, setMayorTexto] = useState<string>('');
  const [resultados, setResultados] = useState<Record<string, number> | null>(null);
  const encontrarMayorTexto = (datos: (number | string)[]): string => {
    const textos = datos.filter(item => typeof item === 'string') as string[];
    return textos.reduce((a, b) => (a > b ? a : b));
  };
  const realizarOperacionesMatematicas = (datos: (number | string)[]): Record<string, number> => {
    const numeros = datos.filter(item => typeof item === 'number') as number[];
    if (numeros.length !== 3) {
      throw new Error("El arreglo no contiene exactamente tres números.");
    }
    const [a, b, c] = numeros; 
    return {
      suma: a + b + c,
      resta: a - b - c,
      multiplicacion: a * b * c,
      division: a / b / c,
    };
  };
  const handleActions = () => {
    setMayorTexto(encontrarMayorTexto(datos));
    setResultados(realizarOperacionesMatematicas(datos));
  };
  return (
    <div>
        <h3>Con este arreglo realiza las acciones</h3>
        <p>[7, 5, "sistemas", "hola", "adios", 2]</p>
      <button onClick={handleActions}>Ejecutar Acciones</button>
      {mayorTexto && <p>El mayor texto es: {mayorTexto}</p>}
      {resultados && (
        <div>
          <p>Resultados de las operaciones matemáticas:</p>
          <p>Suma: {resultados.suma}</p>
          <p>Resta: {resultados.resta}</p>
          <p>Multiplicación: {resultados.multiplicacion}</p>
          <p>División: {resultados.division}</p>
        </div>
      )}
    </div>
  );
};

