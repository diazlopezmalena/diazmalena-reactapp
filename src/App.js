/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const addCart = (cantidad) => {
    console.log(`La cantidad añadida en tu carrito es: ${cantidad}`)
  }

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Próximamente...' />
      <ItemCount stock={5} initial={1} add={addCart}/>
    </div>
  );
}

export default App;
