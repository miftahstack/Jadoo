import Aos from "aos";
import "./App.css";
import Home from "./components/pages/Home";
import "aos/dist/aos.css";
import { ReactLenis, useLenis } from "lenis/react";
function App() {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root />
      <Home />
    </>
  );
}

export default App;
