import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Estrenos from "./components/Estrenos";
import EstrenosCarosuel from "./components/EstrenosCarousel";
import Especiales from "./components/Especiales";
import PaladinsJumbotron from "./components/PaladinsJumbotron";
import Exclusivos from "./components/Exclusivos";

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
    </>
  );
}

export default App;
