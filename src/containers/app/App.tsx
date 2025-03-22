import { BrowserRouter, Routes, Route } from "react-router-dom";
import dotenv from "dotenv";
import Home from "../home/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
