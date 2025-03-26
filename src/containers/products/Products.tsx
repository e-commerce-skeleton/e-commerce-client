// src/components/product/ProductList.tsx
import React from 'react';
import Product from '../../components/product/Product';

interface ProductListProps {
  products: Array<{ id: number; image: string; name: string; price: number }>;
}

const Products: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="max-w-6xl w-full flex flex-col">
      <div className="overflow-y-auto h-[calc(100vh-200px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-49 lg:mt-37">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
