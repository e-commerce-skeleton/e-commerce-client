import Carousel from "../../../components/carousel/Carousel";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

export default function HomeLayout() {
  const images = [
    "https://placehold.co/600x300/FF5733/FFFFFF?text=Slide+1",
    "https://placehold.co/600x300/33FF57/FFFFFF?text=Slide+2",
    "https://placehold.co/600x300/3357FF/FFFFFF?text=Slide+3",
  ];

  return (
    <>
      <Header />
      <div className="p-4">
        <Carousel images={images} />
      </div>
      <Footer />
    </>
  );
}
