import Carousel from "../../../components/carousel/Carousel";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

export default function HomeLayout() {
  const images = [
    "https://placehold.co/600x300/FF5733/FFFFFF?text=Slide+1",
    "https://placehold.co/600x300/FF6F33/FFFFFF?text=Slide+2",
    "https://placehold.co/600x300/FF8733/FFFFFF?text=Slide+3",
    "https://placehold.co/600x300/FF9F33/FFFFFF?text=Slide+4",
    "https://placehold.co/600x300/FFB733/FFFFFF?text=Slide+5",
    "https://placehold.co/600x300/FFCF33/FFFFFF?text=Slide+6",
    "https://placehold.co/600x300/FFE733/FFFFFF?text=Slide+7",
  ];

  return (
    <>
      <Header />
      <div>
        <Carousel images={images} />
      </div>
      <Footer />
    </>
  );
}
