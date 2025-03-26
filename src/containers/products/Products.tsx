import Product from "../../components/product/Product";

const Products = () => {
    const products = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      image: "https://via.placeholder.com/200",
      name: `Producto ${i + 1}`,
      price: (i + 1) * 10,
    }));

    return (
        <div className="px-6 h-screen w-screen flex flex-col items-center ">
          <div className="max-w-6xl w-full flex flex-col">
            <div className="overflow-y-auto h-[calc(100vh-200px)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-49 lg:mt-37">
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
        </div>
      );
    
}  

export default Products;
