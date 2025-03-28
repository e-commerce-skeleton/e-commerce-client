import { useState } from 'react';

interface ButtonWithArrowProps {
  direction: 'left' | 'right';
  onClickFunctions?: (() => void)[]; // Lista de funciones opcionales
}

const ButtonWithArrow = ({ direction, onClickFunctions = [] }: ButtonWithArrowProps) => {
  const [isClicked, setIsClicked] = useState(false);

  // Manejar el clic y ejecutar todas las funciones
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150); // Restablecer tamaño después de 150ms
    
    // Ejecutar todas las funciones en la lista de onClickFunctions
    onClickFunctions.forEach(func => func());
  };

  return (
    <div
      className={`relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer transition-transform duration-200 ease-in-out bg-neutral-400 ${
        isClicked ? 'transform scale-90' : 'transform scale-100'
      }`}
      onClick={handleClick}>
      {direction === 'left' ? (
        <span className="text-3xl font-mono font-extrabold text-white">{'<'}</span>
      ) : (
        <span className="text-3xl font-mono font-extrabold text-white">{'>'}</span>
      )}
    </div>
  );
};

// Botón LeftArrow
export const LeftArrowButton = ({ onClickFunctions }: { onClickFunctions?: (() => void)[] }) => {
  return <ButtonWithArrow direction="left" onClickFunctions={onClickFunctions} />;
};

// Botón RightArrow
export const RightArrowButton = ({ onClickFunctions }: { onClickFunctions?: (() => void)[] }) => {
  return <ButtonWithArrow direction="right" onClickFunctions={onClickFunctions} />;
};
