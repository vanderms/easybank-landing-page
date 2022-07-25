import { FeaturesSection } from "./components/sections/features";
import { Footer } from "./components/sections/footer";
import { HeroSection } from "./components/sections/hero";
import { LatestArticlesSection } from "./components/sections/latest-articles";
import { Navbar } from "./components/sections/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LatestArticlesSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
