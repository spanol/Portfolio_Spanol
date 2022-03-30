import './App.css';
import AbilitiesContainer from './components/abilities/abilitiesContainer';
import About from './components/about/about';
import Contact from './components/contact/contact';
import FooterContainer from './components/footer/footerContainer';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projectsContainer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <AbilitiesContainer/>
    <Contact/> 
    <FooterContainer/>
    </div>
  );
}

export default App;
