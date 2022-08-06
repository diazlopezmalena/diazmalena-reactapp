/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  /*const addCart = (cantidad) => {
    console.log(`La cantidad añadida en tu carrito es: ${cantidad}`)
  }*/

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Todos los productos' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Por género'/>} />
          {/*<ItemCount stock={5} initial={1} add={addCart}/>*/}
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h2>Error 404</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
