import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Grid_dupla_pra_baixo from './components/grid_dupla_pra_baixo';
import Exemplo_Grid from './components/exemplogrid';
import Exemplo_Grid_class from './components/grid_class';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/exemplo_grid" element={ <Exemplo_Grid/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/grid_dupla_pra_baixo" element={ <Grid_dupla_pra_baixo/> } />
        <Route path="/grid_class" element={ <Exemplo_Grid_class/> } />
        </Routes>
    </div>
  );
}

export default App;
