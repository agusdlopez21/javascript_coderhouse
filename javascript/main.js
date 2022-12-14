const divGames = document.getElementById("divGames")
const tablaCarrito = document.getElementById("tablaCarrito")
const totalCarrito = document.getElementById("totalCarrito")
const botonAgregar = document.getElementById("botonAgregar")
const formulario = document.getElementById("formulario")
const botonBuscar = document.getElementById("botonBuscar")
let cartAmount = document.getElementById("cartAmount")
let dataJuegos

document.addEventListener('DOMContentLoaded', () => { //Cargamos funciones con DomContent
    traerJson()
    mostrarCarrito()
    mostrarTotalCarrito()
    mostrarEnCarrito()
    console.log('DOM fully loaded and parsed');
});

const traerJson = async() => { //Traemoos Json local
    let response = await fetch("javascript/juegos.json")
    let data = await response.json()
    dataJuegos = data
    mostrarProductos(dataJuegos)
}

function mostrarProductos(game){ // Funcion para mostrar productos en el html
    divGames.innerHTML=""
    game.forEach(juego => {
        divGames.innerHTML+=`
        <div class="card mb-4 texto" style="width: auto;">
            <img src="${juego.img}" class="card-img-top" alt="..." style="height:15rem;">
            <div class="card-body">
                <h5 class="card-title texto">${juego.descripcion}</h5>
                <p class="card-text texto">$ ${juego.precio}</p>
                <button onclick="agregarAlCarrito(${juego.id})" class="btn btn-success texto">Comprar</button>
            </div>
        </div>
        `
    });
}

function mostrarCarrito() { // Mostramos carrito
    let carrito = capturarStorage()
    tablaCarrito.innerHTML =" "
    carrito.forEach(element => {
        tablaCarrito.innerHTML+= `
        <tr">
            <td data-th="Product">
                <div class="row">
                <div class="col-sm-2 hidden-xs"><img src="${element.img}" width=60px alt="..."/></div>
                    <div class="col-sm-10">
                        <h6 class="nomargin">${element.descripcion}</h6>
                    </div>
                </div>
            </td>
            <td data-th="Cantidad">
                <div class="column d-flex align-items-center">
                    <button class="btn btn-sm" onclick="restarCant(${element.id})"><i class="fa-solid fa-square-minus"></i></button>
                    <p class="form-control text-center mb-0 texto">${element.cantidad}</p>
                    <button class="btn btn-sm" onclick="incrementarCant(${element.id})"><i class="fa-solid fa-square-plus"></i></button>
                </div>
            </td>
            <td data-th="Subtotal" class="text-center">${element.precio * element.cantidad}</td>
            <td><button onclick="restarCant(${element.id})" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
        `
    });
}

function mostrarTotalCarrito() { //Funcion para mostrar el total del carrito
    //calculo el valor total
    const carrito = capturarStorage();
    const total = carrito.reduce(
      (acc, element) => acc + element.cantidad * element.precio,0
    );
    totalCarrito.innerHTML = total.toFixed(1);
  }

