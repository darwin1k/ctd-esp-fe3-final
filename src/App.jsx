import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Layout from './Layouts/layout';

function App() {
  return (
  
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/favs" element={<Favs/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
