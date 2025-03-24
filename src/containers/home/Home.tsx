import Header from "../../components/header/Header";

const H1style = "bg-red-500 rounded-3xl p-4 m-4 hover:scale-110 transition-all";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={H1style}>Hola</h1>
    </>
  );
}
