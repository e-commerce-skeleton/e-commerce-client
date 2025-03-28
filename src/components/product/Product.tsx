interface ProductProps {
    product: {
      prodId: string;
      catId: string;
      imgUrl: string;
      altText: string;
      name: string;
      currentPrice: number;
      prevPrice?: number | null;
      paymentMethod: string | null;
      detail?: string | null;
    };
  }

  const Product = ({ product }: ProductProps) => {
    return (
      <div className="w-full max-w-md flex flex-col items-left">
        <img
          src={product.imgUrl}
          alt={product.altText}
          className="w-full h-112 object-cover border-1 border-gray-300"
        />
        <div className=" text-black  mt-1 text-left">{product.name}</div>
        <div className="flex items-center gap-2">
          <span className="text-xl text-gray-700 font-bold">${product.currentPrice}</span>
          {product.prevPrice && (
            <span className="text-gray-400 line-through text-md">${product.prevPrice}</span>
          )}
        </div>
        <p className="text-gray-400 font-normal text-sm">{product.paymentMethod}</p>
        {product.detail && (
          <p className="text-green-600 font-semibold">{product.detail}</p>
        )}
      </div>
    );
  };
  
  
  export default Product;
  