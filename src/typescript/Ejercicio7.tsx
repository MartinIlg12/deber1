import React, { useState } from 'react';
export const Ejercicio7: React.FC = () => {
  const [acumulador, setAcumulador] = useState<number>(5);
  const incrementar = () => {
    setAcumulador(acumulador + 5);
  };
  const disminuir = () => {
    setAcumulador(acumulador - 5);
  };
  return (
    <div>
      <button className='btn btn-success'>Valor del Acumulador: {acumulador}</button><br /><br /><br />
      <button onClick={incrementar} className='btn btn-primary'>Incrementar</button>
      ---
      <button onClick={disminuir} className='btn btn-primary'>Disminuir</button>
    </div>
  );
};

