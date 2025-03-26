import Header from "../../components/header/Header";
import Searcher from "../../components/searcher/Searcher"; // Asegúrate de importar el nuevo componente Searcher
import Products from "../products/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Searcher />
      <Products />
    </>
  );
}
