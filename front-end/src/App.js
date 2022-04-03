import "./App.css";
import AbilitiesContainer from "./components/abilities/abilitiesContainer";
import About from "./components/about/about";
import FooterContainer from "./components/footer/footerContainer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Projects from "./components/projects/projectsContainer";
import SearchProvider from "./context/context";

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Header />
        <Home />
        <Projects />
        <AbilitiesContainer />
        <About />
        <FooterContainer />
      </div>
    </SearchProvider>
  );
}

export default App;
