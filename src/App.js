import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Estrenos from "./components/Estrenos";
import EstrenosCarosuel from "./components/EstrenosCarousel";
import Especiales from "./components/Especiales";
import PaladinsJumbotron from "./components/PaladinsJumbotron";
import Exclusivos from "./components/Exclusivos";
import Populares from "./components/Populares";
import PopularesCarosuel from "./components/PopularesCarousel";
import Lanzamientos from "./components/Lanzamientos";
import LanzamientosCarousel from "./components/LanzamientosCarousel";
import ClasicoDelMes from "./components/ClasicoDelMes";
import WakfuJumbotron from "./components/WakfuJumbotron";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Estrenos />
      <EstrenosCarosuel />
      <Especiales />
      <PaladinsJumbotron />
      <Exclusivos />
      <Populares />
      <PopularesCarosuel />
      <Lanzamientos />
      <LanzamientosCarousel />
      <ClasicoDelMes />
      <WakfuJumbotron />
      <Footer />
    </>
  );
}

export default App;
