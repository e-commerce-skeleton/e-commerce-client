import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import ProductCarousel from "../../../components/product carousel/ProductCarousel";

export default function HomeLayout() {
  const images = [
    "https://placehold.co/600x300/FF5733/FFFFFF?text=Slide+1",
    "https://placehold.co/600x300/33FF57/FFFFFF?text=Slide+2",
    "https://placehold.co/600x300/3357FF/FFFFFF?text=Slide+3",
  ];

const sampleProducts = Array.from({ length: 10 }, (_, i) => ({
  prodId: `prod-${i + 1}`,
  catId: `cat-${(i % 5) + 1}`,
  imgUrl: `https://placehold.co/300x300?text=Producto+${i + 1}`,
  altText: `Product ${i + 1}`,
  name: `Producto ${i + 1}`,
  currentPrice: (i + 1) * 1000,
  prevPrice: i % 2 === 0 ? (i + 1) * 1200 : null,
  paymentMethod: i % 3 === 0 ? "3 cuotas sin interés" : null,
  detail: i % 3 === 0 ? "Oferta especial" : null,
}));


  return (
    <div>
      <Header />
      {/* <div className="p-4">
        <Carousel images={images} />
      </div> */}
      <div className="mt-30">
        <ProductCarousel products={sampleProducts} title='Destacados'/>
      </div>
    <Footer />
    </div>
  );
}
