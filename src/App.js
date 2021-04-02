import './styles/App.css';
import Header from './components/header-component/Header';
import AboutUs from './components/about-us-component/AboutUs.js';
import Aida from './components/aida-component/Aida.js';
import Footer from './components/footer-component/Footer';


function App() {
  return (
    <div className="App">
        <Header/>       
        <AboutUs/>
        <Aida/>
        <Footer/>  
    </div>
  );
}

export default App;
