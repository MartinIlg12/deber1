import React, { useState, useEffect } from 'react';
export const Ejercicio1: React.FC = () => {
  const [lado, setLado] = useState<number | null>(null);
  const [area, setArea] = useState<number | null>(null);
  const calcularAreaCuadrado = (lado: number): number => {
    return lado * lado;
  };
  useEffect(() => {
    const ladoStr = prompt("Ingrese la longitud del lado del cuadrado:");
    if (ladoStr !== null) {
      const lado = parseFloat(ladoStr);
      if (isNaN(lado)) {
        alert("Por favor, ingrese un número válido.");
      } else {
        setLado(lado);
        setArea(calcularAreaCuadrado(lado));
      }
    } else {
      alert("No se ingresó ningún valor.");
    }
  }, []);
  return (
    <div>
      {lado !== null && area !== null ? (
        <p>El área de un cuadrado con lado {lado} es {area}</p>
      ) : (
        <p>Esperando la entrada del usuario...</p>
      )}
    </div>
  );
};
