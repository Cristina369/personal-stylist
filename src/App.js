import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";
import Header from "./components/common/heading/Header";
import About from "./components/about/About";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
// import Themetoggle from "./components/common/btn/Themetoggle";

function App() {
  return (
    <>  
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
           <Route path="/about" exact element={<About/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/portofolio" exact element={<Portofolio/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
