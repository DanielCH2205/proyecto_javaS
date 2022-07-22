
const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
}

agregarAlCarrito({id: 112, name:"Chanclas Adidas", price: 150.000});
agregarAlCarrito({id: 113, name:"Camiseta Nike", price: 170.000});
agregarAlCarrito({id: 114, name:"Sudadera Reebok", price: 400.000});
agregarAlCarrito({id: 115, name:"Tennis New Balance", price: 350.000});
agregarAlCarrito({id: 116, name:"Esqueleto Nike", price: 185.000});
agregarAlCarrito({id: 117, name:"Pantalon Sudadera Puma", price: 140.000});
agregarAlCarrito({id: 118, name:"Guantes de Boxeo Everlast", price: 450.000});
agregarAlCarrito({id: 119, name:"Pantaloneta Nike Negra", price: 135.000});



function borrarProducto(idproducto){
    const index = carrito.findIndex((producto) => producto.id === idproducto);
    carrito.splice(index, 1);
    console.log(carrito);
}

borrarProducto(112);
borrarProducto(113);
