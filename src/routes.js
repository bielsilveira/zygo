import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Pages/Home/home";
import Services from "./Pages/Services/services";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Plans from "./Pages/Plans/plans";
import Wpp from "./Components/WhastApp/wpp";
import ScrollToTop from './Components/scrollToTop';


function RoutesApp(){
    return(
        <BrowserRouter>
        <ScrollToTop />
        <Wpp/>
        <Header/>
        <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/about" element = { <About/> } />
            <Route path="/services" element = { <Services/> } />
            <Route path="/plans" element = { <Plans/> } />
            <Route path="/contact" element = { <Contact/> } />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default RoutesApp;