import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import About from "../About/About.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="site">
      <a className="site__skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
