import './styles/App.css';
import Header from './components/header-component/Header';
import Footer from './components/footer-component/Footer';
import Gallery from './components/gallery-component/Gallery';
import TextComponent from './components/text-component/TextComponent';
import TextTitle from './components/text-title-component/TextTitle';
import Form from './components/Form.js';
import aida from './assets/images/aida.png';
import lucky1 from './assets/images/lucky1.png';
import lucky2 from './assets/images/lucky2.png';
import lucky3 from './assets/images/lucky3.png';
import lucky4 from './assets/images/lucky4.jpg';
import fest from './assets/images/creativityFest.png';
import asocijacija from './assets/images/asocijacija.jpg';
import Pulse from  'react-reveal/Pulse';

function App() {
  
  return (
    <div className="App">
        <Header/>
        <Pulse>
          <div id="festDiv">
          <img id="fest" src={fest}></img> 
          </div>
        </Pulse>
        <Gallery/>
        <Pulse>
          <div id="LM1">  
            <img src={lucky1} id="lucky1"></img>
            <TextComponent>
              <TextTitle>O nama</TextTitle>
              Lucky Market je projekat Asocijacije Kreativaca koji održavamo od 2011. godine kao mjesto susreta kreativaca i razmjene ideja.
              <br/>Ako želite posjetiti jedan živi, vibrirajući, šareni, multikulturalni, uzbudljiv i drugačiji događaj sa izlagačima i posjetiocima koji dolaze ne samo iz Sarajeva, nego i iz cijele BiH, Lucky Market je mjesto za Vas.
            </TextComponent> 
          </div>
        </Pulse>
        <Pulse>
          <div id="LM2"> 
            <img src={lucky2} id="lucky2"></img>  
            <TextComponent>
              Ideja Lucky Marketa nadahnuta je svjetski poznatim marketima, društveno korisnim i ekološkim, te na njemu možete nabaviti sve od suvenira do rahat lokuma.
              <br/>LM nudi “novu kreativnost,” fuziju kultura, zanata, umjetnosti i dizajna na jednom mjestu.
            </TextComponent>
          </div>
        </Pulse>
        <Pulse>
          <div id="LM3"> 
            <img src={lucky3} id="lucky3"></img>  
            <TextComponent>
            LM je od nastanka pa do danas postao cool shopping destinacija, gdje u razgovoru s kreativcima možete saznati zbog čega su ludi za onim čime se bave, a pri tome pazariti neki unikatan komad nakita, cutting edge dizajnerske odjeće, pronaći
                  jedinstvene suvenire i poklone, dječiju garderobu i igračke, lampe itd; a pri tome pomoći kreativcima da plasiraju proizvod i nastave svoj rad.
            </TextComponent> 
          </div>
        </Pulse>
        <Pulse>
          <div id="LM4">  
            <img src={lucky4} id="lucky4"></img>
            <TextComponent> 
              Vrijednost našeg marketa je i u tome što će i lovci na jeftino biti zadovoljni. A sve ono što ne budu našli tu na jednom mjestu, moći će naručiti kod Kreativaca.
            </TextComponent>
          </div>
        </Pulse>
        <Pulse>
          <div id="AK">
            <img src={asocijacija} id="asocijacija"></img>   
            <TextComponent>
              <TextTitle>Asocijacija kreativaca</TextTitle>
              Asocijaciju kreativaca osnovala je 2010. godine BH modna dizajnerica Aida Korman. Nakon Aidinog dugogodišnjeg rada na promociji BH kulture kroz modu i dizajn, odlučila je da okupi sve one koji se bave proizvodnjom Made in BiH.              
            </TextComponent> 
          </div>
        </Pulse>
        <Pulse>
          <div id="Aida">   
            <img src={aida} id="aidaFoto"></img>
            <TextComponent>
              <TextTitle>Aida Korman</TextTitle>
              Aida Korman je bh modna dizajnerica rođena u Sarajevu gdje je i upisala studij produkt dizajna 1997, a iduće godine nastavlja ga u Rimu na Evropskom Institutu za Dizajn, odsjek modni dizajn, te tu stiče diplomu. Po završetku studija radila je za Alexandra McQueena u Londonu. Nakon određenog stečenog iskustva odlučila se posvetiti vlastitom kreatorskom izražaju kojim se bavi i danas.                 
            </TextComponent> 
          </div> 
        </Pulse>
        <Form/>
        <Footer/> 
    </div>
  );
}

export default App;
