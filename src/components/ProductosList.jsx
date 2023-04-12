import React, { useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore"
import Swal from "sweetalert2";
import "./Components-Styles/ProductosList.scss"
import "./Components-Styles/SwalLoader.scss"
import app from "../firebase/config";

export const ProductosList = ({ productosCarrito, setProductosCarrito, contador, setContador, total, setTotal }) => {

    const [productos, setProductos] = useState([]);
    const database = getFirestore(app);
    const coleccion = collection(database, 'cervezas');
    getDocs(coleccion).then(res => setProductos(res.docs.map(item => ({ id: item.id, ...item.data() }))));

    const agregarProductos = (item) => {

        setTimeout(time => {
            let carrito = [productosCarrito.length];
            if (productosCarrito.find(items => items.id === item.id)) {
                const itemsRep = productosCarrito.map(items => items.id === item.id ? { ...items, cantidad: items.cantidad + 1 } : items);
                setTotal(total + item.precio * item.cantidad);
                return setProductosCarrito([...itemsRep]);
            }
            setProductosCarrito([...productosCarrito, item]);
            setContador(contador + carrito.length);
            setTotal(total + item.precio * item.cantidad);
        }, 500);

        Swal.fire({
            width: 200,
            iconHtml: '<div class="lds-facebook"><div></div><div></div><div></div>',
            iconColor: "white",
            showConfirmButton: false,
            timer: 500
        });
    }

    const detalle = (item) => {

        Swal.fire({
            width: 600,
            heightAuto: 600,
            html: `<div className="contenedorDetalle">
                        <img className="imagenDetalle" src=${item.imagen} alt="imagen item detalle"/>
                        <div className="contenedorP">
                            <p className="nombreDetalle">${item.nombre}</p>
                            <p className="marcaDetalle">Marca: ${item.marca}</p>
                            <p className="categoriaDetalle">Categoria: ${item.categoria}</p>
                            <p className="precioDetalle">Precio: $${item.precio}</p>
                            <p className="descripcionDetalle">Descripcion: ${item.descripcion}</p>
                        </div>
                   </div>
            `,
            showConfirmButton: true,
            confirmButtonText: "CERRAR DETALLE",
            confirmButtonColor: "gray",
        })
    }


    return (
        <>
            <div className="contenedorProductos">
                {productos.map(item => {
                    return (
                        <div className="contenedorItems" key={item.id}>
                            <p className="nombreItem">{item.nombre}</p>
                            <p className="marcaItem">Marca: <span>{item.marca}</span></p>
                            <p className="categoriaItem">Categoria: <span className="colorCategoriaItem">{item.categoria}</span></p>
                            <img className="imgItem" src={item.imagen} alt="imagen item" />
                            <p className="precioItem">Precio: $<span className="numeroItem">{item.precio}</span></p>
                            <button className="botonAgregarItem" type="button" onClick={() => agregarProductos(item)}>AGREGAR</button>
                            <button className="detalle" onClick={() => detalle(item)}>DETALLE</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}