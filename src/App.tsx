import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

/**
 * Root App component – layout wrapper for the Brainwave landing page.
 * Renders header, hero, benefits, collaboration, services, pricing, roadmap, footer,
 * and the shared button gradient SVG definitions.
 */
const App = () => {
  return (
    <>
      {/* Top padding accounts for fixed header height; overflow-hidden avoids horizontal scroll from animations. */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      {/* Rendered once so Button components can reference gradient defs (btn-left, btn-top, etc.) by id. */}
      <ButtonGradient />
    </>
  );
};

export default App;
