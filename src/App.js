import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { RoleFit } from "./components/RoleFit";
import { WorkingFlow } from "./components/WorkingFlow";
import { PluginStack } from "./components/PluginStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <RoleFit />
      <WorkingFlow />
      <PluginStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
