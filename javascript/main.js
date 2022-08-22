const divGames = document.getElementById("divGames")
const tablaCarrito = document.getElementById("tablaCarrito")
const totalCarrito = document.getElementById("totalCarrito")

document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito()
    mostrarTotalCarrito()
    mostrarProductos(game)
    console.log('DOM fully loaded and parsed');
});

function mostrarProductos(game){
    divGames.innerHTML=""
    game.forEach(juego => {
        divGames.innerHTML+=`
        <div class="card mb-4 texto" style="width: auto;">
            <img src="${juego.img}" class="card-img-top" alt="..." style="height:15rem;">
            <div class="card-body">
                <h5 class="card-title texto">${juego.titulo} ${juego.juego}</h5>
                <p class="card-text texto">$ ${juego.precio}</p>
                <button onclick="agregarAlCarrito(${juego.id})" class="btn btn-success texto">Comprar</button>
            </div>
        </div>
        `
    });
}

function mostrarCarrito() {
    let carrito = capturarStorage()
    tablaCarrito.innerHTML =""
    carrito.forEach(element => {
        tablaCarrito.innerHTML+= `
        <tr">
            <td data-th="Product">
                <div class="row">
                <div class="col-sm-2 hidden-xs"><img src="${element.img}" width=64px alt="..."/></div>
                    <div class="col-sm-10">
                        <h4 class="nomargin">${element.titulo} ${element.juego}</h4>
                    </div>
                </div>
            </td>
            <td data-th="Precio">${element.precio}</td>
            <td data-th="Cantidad">
                <div class="column d-flex align-items-center">
                    <button class="btn btn-sm" onclick="restarCant(${element.id})"><i class="fa-solid fa-square-minus"></i></button>
                    <p class="form-control text-center mb-0 texto">${element.cantidad}</p>
                    <button class="btn btn-sm" onclick="incrementarCant(${element.id})"><i class="fa-solid fa-square-plus"></i></button>
                </div>
            </td>
            <td data-th="Subtotal" class="text-center">${element.precio * element.cantidad}</td>
            <td><button onclick="eliminarProductoCarrito(${element.id})" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
        `
    });
}

function capturarStorage(){
    return JSON.parse(localStorage.getItem("carrito")) || []
}

function guardarStorage(array){
    localStorage.setItem("carrito", JSON.stringify(array))
}

function agregarAlCarrito(id) {
    let carrito = capturarStorage()
    if (estaEnCarrito(id)){
        incrementarCant(id)
    } else {
        let productoEncontrado = game.find(juego=>juego.id==id)
        carrito.push({...productoEncontrado, cantidad: 1})
        guardarStorage(carrito)
        mostrarCarrito()
    }
    mostrarCarrito()
    console.log(carrito)
    mostrarTotalCarrito()
}


function incrementarCant(id) {
    let carrito = capturarStorage()
    const indice = carrito.findIndex(juego => juego.id==id)
    carrito[indice].cantidad++
    guardarStorage(carrito)
    mostrarCarrito()
    mostrarTotalCarrito()
}

function restarCant(id) {
    let carrito = capturarStorage();
    const index = carrito.findIndex((e) => e.id == id); // busco la posicion del objeto
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--; //segun la posicion le resto uno a cantidad
      guardarStorage(carrito);
      mostrarCarrito();
      mostrarTotalCarrito();
    } else {
        Swal.fire({
            title: `¿Desea eliminar ${carrito[index].titulo} ${carrito[index].juego} del carrito de compras?`,
            icon: 'question',
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                carrito = Swal.getConfirmButton() && eliminarProductoCarrito(id)
                Swal.fire(
                    'Su producto fue eliminado correctamente',
                    )
                }
            }
            )}
        }

function estaEnCarrito(id){
    let carrito = capturarStorage()
    return carrito.some(e=>e.id==id)
}

function eliminarProductoCarrito(id) {
    let carrito = capturarStorage()
    //filtramos y hacemos que nos devuelva todo menos el id buscado
    let resultado = carrito.filter(juego => juego.id != id)
    guardarStorage(resultado)
    console.log(resultado)
    mostrarCarrito()
    mostrarTotalCarrito()
}


function mostrarTotalCarrito() {
    //calculo el valor total
    const carrito = capturarStorage();
    const total = carrito.reduce(
      (acc, element) => acc + element.cantidad * element.precio,0
    );
    totalCarrito.innerHTML = total.toFixed(1);
  }


botonPedidoRealizado.addEventListener('click', () => {
    if (estaVacio()) {
        Swal.fire({
            icon: 'error',
            title: 'El carrito esta vacío',
            text: 'Agrega al menos un producto para realizar un pedido',
        }) 
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Pedido realizado con éxito',
            confirmButtonText: 'Aceptar',
        })
        localStorage.clear();
        mostrarCarrito();
        mostrarTotalCarrito();
    }
})

function estaVacio() {
    if (capturarStorage() == "") {
        return true
    } else {
        return false
    }
}

