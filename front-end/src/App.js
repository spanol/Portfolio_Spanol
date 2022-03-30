import './App.css';
import Abilities from './components/abilities';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Abilities/>
    <Contact/> 
    <Footer/>
    </div>
  );
}

export default App;
