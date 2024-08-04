import "./App.css";
// import Home from "./Components/Home";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      {/* <Work /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;