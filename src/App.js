import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import { Navbaar } from "./components/Navbaar";
import { MyCarousal } from "./components/my-carousal/my-carousal.component";
import { Title } from "./components/title-message/title-message.component";
import { Footer } from "./components/footer/Footer";
import Home2 from './components/Home/Home2';
import MyStats from './components/MyStats';
// import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';




function App() {
  return (
    <div className="App">
      <MyCarousal/>
      <Title />
      <Navbaar />
      <Home2/>
      <Skills />
      <ChakraProvider>
      <MyStats/>
      </ChakraProvider>
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
