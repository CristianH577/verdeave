import BarraNavegacion from "./layout/BarraNavegacion";
import Footer from "./layout/Footer";
import AnimationBackground from "./layout/AnimationBackground";

import SobreMi from "./views/SobreMi";
import Trabajos from "./views/Trabajos";
import Servicios from "./views/Servicios";

export default function App() {
  return (
    <div className="text-white bg-gradient-to-br from-sky-900 from-10% via-emerald-600 to-green-500 to-80% backdrop-blur-md bg-opacity-30 flex flex-col max-xs:break-all">
      <BarraNavegacion />
      <AnimationBackground />

      <main className="flex-grow pb-8 px-4 w-full max-w-[1200px] place-self-center z-10">
        <SobreMi />
        <Trabajos />
        <Servicios />
      </main>

      <Footer />
    </div>
  );
}
