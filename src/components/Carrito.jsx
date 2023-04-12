import React from "react";
import Swal from "sweetalert2";
import "./Components-Styles/Carrito.scss"
import "./Components-Styles/SwalLoader.scss"
import Eliminar from "./Components-Imgs/imgs-carrito/icono-carrito-quitar.png"

export const Carrito = ({ productosCarrito, setProductosCarrito, contador, setContador, total, setTotal }) => {

    const quitarProductos = (itemCarrito) => {

        Swal.fire({
            icon: "question",
            title: "¿DESEA QUITAR PRODUCTO?",
            denyButtonText: "CANCELAR",
            denyButtonColor: "red",
            showDenyButton: true,
            confirmButtonText: "QUITAR",
            confirmButtonColor: "green",
            showConfirmButton: true
        }).then(result => {

            if (result.isConfirmed) {
                setTimeout(time => {
                    let carritoAct = [productosCarrito];
                    const items = productosCarrito.filter(items => items.id !== itemCarrito.id);
                    setProductosCarrito(items);
                    setContador(contador - carritoAct.length);
                    setTotal(total - itemCarrito.precio * itemCarrito.cantidad);

                    Swal.fire({
                        icon: "success",
                        text: "EL PRODUCTO SE AH QUITADO DEL CARRITO CON EXITO",
                    })
                }, 1500);

                Swal.fire({
                    width: 200,
                    iconHtml: '<div class="lds-facebook"><div></div><div></div><div></div>',
                    iconColor: "white",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <>
            <div className="contenedorCarrito">
                {productosCarrito.length ? (
                    <>
                    <div className="contenedorTotal">
                        <p className="total">TOTAL: $<span className="numeroTotal">{total}</span></p>
                    </div>
                        <div className="contenedorProductosCarrito">
                            {productosCarrito.map(itemCarrito => (
                                <div className="contenedorItemsCarrito" key={itemCarrito.id}>
                                    <p className="nombreItemCarrito">{itemCarrito.nombre}</p>
                                    <p className="categoriaItemCarrito">Categoria: <span className="colorCategoriaItemCarrito">{itemCarrito.categoria}</span></p>
                                    <img className="imgItemCarrito" src={itemCarrito.imagen} alt="imagen item carrito" />
                                    <p className="precioItemCarrito">Precio: $<span className="numeroItemCarrito">{itemCarrito.precio}</span></p>
                                    <p className="cantidadItemCarrito">Cantidad: <span className="colorCantidadItemCarrito">{itemCarrito.cantidad}</span></p>
                                    <p className="marcaItemCarrito">MARCA: <span>{itemCarrito.marca}</span></p>
                                    <button className="botonQuitar" onClick={() => quitarProductos(itemCarrito)}><img src={Eliminar} alt="icono quitar" /></button>
                                </div>
                            ))}
                        </div>
                    </>) : (<p className="carritoVacio">-CARRITO VACIO-</p>)}
            </div>
        </>
    );
}
