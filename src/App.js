import Navbar from './components/navbar';
import Header from './components/header'
import Firstsection from './components/firstsection'
import Cards from './components/cards'
import Lastsection from './components/lastsection';
import Skills from './components/skills';
import "@fontsource/red-rose/300.css";
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Firstsection />
     <Cards />
     <Lastsection />
     <Skills />
     
    </div>
  ) ;
}

export default App;
