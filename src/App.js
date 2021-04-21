import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Estrenos from "./components/Estrenos";
import EstrenosCarosuel from "./components/EstrenosCarousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Estrenos />
      <EstrenosCarosuel />
    </>
  );
}

export default App;
