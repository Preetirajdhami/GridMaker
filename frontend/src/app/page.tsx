import Footer from "./components/footer";
import { GridDrawingTool } from "./components/grid-drawing-tool";
import HowTo from "./components/HowTo";
import Intro from "./components/intro";
import WhyGridify from "./components/WhyGridify";

const Home = () => {
  return (
    <main className="min-h-screen  bg-base ">
      {/* Header */}
      <section className="  mb-10">
        <h1 className="text-4xl bg-primary md:text-5xl py-5 px-4 font-bold text-primaryText  tracking-tight">
          Gridify
        </h1>
        <Intro />
        <HowTo />
      </section>

      {/* Grid Drawing Tool */}
      <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-secondary transition-all">
        <GridDrawingTool />
      </section>

      <WhyGridify />

      <Footer />
    </main>
  );
};

export default Home;
