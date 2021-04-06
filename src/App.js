import './styles/App.css';
import Header from './components/header-component/Header';
import AboutUs from './components/about-us-component/AboutUs.js';
import AK from './components/ak-component/AK.js';
import Aida from './components/aida-component/Aida.js';
import Footer from './components/footer-component/Footer';
import Gallery from './components/gallery-component/Gallery';


function App() {
  return (
    <div className="App">
        <Header/> 
        <Gallery/>      
        <AboutUs/>
        <AK/>
        <Aida/>
        <Footer/>  
    </div>
  );
}

export default App;
