import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Analytics from "./sections/Analytics";
import Contact from "./sections/Contact";
import DataPipelines from "./sections/DataPipelines";
import Hero from "./sections/Hero";
import Testing from "./sections/Testing";
import UniversalAgent from "./sections/UniversalAgent";


const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      
      <section className="sm:px-16 px-8 -mb-10 ">
        <Hero/>
      </section>
  
      <section className="sm:px-16 px-8 -mb-10 ">
        <Testing/>
      </section>
    
      <section className="sm:px-16 px-8 -mb-10 ">
        <UniversalAgent/>
      </section>

      <section className="sm:px-16 px-8 -mb-10 ">
        <DataPipelines/>
      </section>

      <section className="sm:px-16 px-8 -mb-10">
        <Analytics/>
      </section>

      <section className="sm:px-16 px-8 -mb-10 ">
        <Contact/>
      </section>
      <Footer/>
    </main>
  );
};

export default App;
