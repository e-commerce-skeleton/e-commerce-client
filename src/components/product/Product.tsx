import React, { useState } from "react";
import { OutlineFavoriteIcon, FilledFavoriteIcon } from "../icons/Icon";

// Definir la interfaz de los props que el componente Product recibirá
interface ProductProps {
  image: string;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ image, name, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-lg shadow-lg p-4 w-64 h-64">
      {/* Contenedor cuadrado para la imagen */}
      <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor con los datos del producto y el ícono de favorito */}
      <div className="flex justify-between w-full mt-4">
        {/* Datos del producto alineados a la izquierda */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-xl font-bold text-gray-900">${price}</p>
        </div>

        {/* Ícono de favorito alineado a la derecha */}
        <button
          onClick={toggleFavorite}
          className="!border-none"

        >
          {isFavorite ? <FilledFavoriteIcon /> : <OutlineFavoriteIcon />}
        </button>
      </div>
    </div>
  );
};



export default Product;
