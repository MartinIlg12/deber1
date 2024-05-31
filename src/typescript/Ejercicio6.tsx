import React, { useState } from 'react';
export const Ejercicio6: React.FC = () => {
  const alumnos = [
    {
      nombre: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      nombre: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      nombre: 'Gerson',
      edad: 18,
      calificacion: 9,
    }
  ];
  const [promedio, setPromedio] = useState<number | null>(null);
  const calcularPromedioCalificaciones = (alumnos: { nombre: string, edad: number, calificacion: number }[]): number => {
    const totalCalificaciones = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
    return totalCalificaciones / alumnos.length;
  };
  const handleCalcularPromedio = () => {
    setPromedio(calcularPromedioCalificaciones(alumnos));
  };
  return (
    <div>
        <h3>Calificaciones de Estudiantes</h3>
        <p>Viviana 10, Wendy 8, Gerson 9</p>
      <button onClick={handleCalcularPromedio}>Calcular Promedio</button>
      {promedio !== null && (
        <p>El promedio de las calificaciones es: {promedio}</p>
      )}
    </div>
  );
};
