import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';
import { ProductosList } from './components/ProductosList';
import { Carrito } from './components/Carrito';

function App() {

  const [productosCarrito, setProductosCarrito] = useState([]);
  const [contador, setContador] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar contador={contador} />
        <Routes>
          <Route exact path={"/"} element={<Inicio />} />
          <Route path={"/ProductosList"} element={<ProductosList
            productosCarrito={productosCarrito} setProductosCarrito={setProductosCarrito}
            contador={contador} setContador={setContador}
            total={total} setTotal={setTotal} />} />
          <Route path={"/Carrito"} element={<Carrito
            productosCarrito={productosCarrito} setProductosCarrito={setProductosCarrito}
            contador={contador} setContador={setContador}
            total={total} setTotal={setTotal} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;