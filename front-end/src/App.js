import './App.css';
import About from './components/about';
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
    <Footer/>
    </div>
  );
}

export default App;
