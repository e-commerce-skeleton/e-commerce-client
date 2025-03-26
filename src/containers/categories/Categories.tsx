// src/components/categories/Categories.tsx
import React from 'react';

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="w-1/3 lg:w-1/4 p-4 bg-gray-200 rounded-lg h-[calc(100vh-200px)] overflow-y-auto mt-55 lg:mt-40">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Categorías</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
