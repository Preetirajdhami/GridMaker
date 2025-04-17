import { GridDrawingTool } from "./components/grid-drawing-tool";

const Home = () => {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6">Grid Drawing Tool</h1>
      <GridDrawingTool />
    </main>
  );
};

export default Home;
