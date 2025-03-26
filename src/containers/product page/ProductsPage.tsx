// src/pages/product/ProductPage.tsx
import Searcher from "../../components/searcher/Searcher"; // Asegúrate de importar el nuevo componente Searcher
import Categories from '../categories/Categories';
import Products from '../products/Products';
const ProductPage = () => {
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: "https://via.placeholder.com/200",
    name: `Producto ${i + 1}`,
    price: (i + 1) * 10,
  }));

  const categories = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
    "Categoría 5",
    "Categoría 6",
    "Categoría 7",
    "Categoría 8",
    "Categoría 9",
    "Categoría 10",
    "Categoría 11",
    "Categoría 12",
    "Categoría 13",
    "Categoría 14",
    "Categoría 15",
  ];

  return (
    <>
        {/* Buscador */}
        <Searcher />
      <div className="px-6 h-screen w-screen flex">
        {/* Menú de categorías a la izquierda con scroll */}
        <Categories categories={categories} />

        {/* Contenedor de productos a la derecha */}
        <div className="w-3/4 flex flex-col items-center p-4">
          <Products products={products} />
        </div>
      </div>
    </>
  );
};


export default ProductPage;
