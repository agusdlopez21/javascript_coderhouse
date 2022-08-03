class videoJuego {
    constructor(titulo, juego, precio) {
        this.titulo = titulo;
        this.juego = juego;
        this.precio = precio;
    }
}


class Carro {
    constructor(total){
        this.videoJuegos = []
        this.total = total
    }
    agregarAlCarro (game){
        this.videoJuegos.push(game)
        this.total += game.precio
    }
    
    MostrarCarrito(){
        this.videoJuegos.forEach(listado => {
            console.log(listado);
        });
    }
}

let titulo;
let juego;
let seguir = true;

const game = [ {titulo: "Minecraft", juego:"Gratis", precio: 0},
               {titulo: "Minecraft", juego:"Premium", precio: 29.99},
               {titulo: "Call of Duty", juego:"Modern Warfane 2", precio: 70.00},
               {titulo: "Call of Duty", juego:"Blcak Ops 2", precio: 42.00},
               {titulo: "Call of Duty", juego:"Ghost", precio: 58.00},
               {titulo: "FIFA", juego:"FIFA 20", precio: 19.72},
               {titulo: "FIFA", juego:"FIFA 21", precio: 16.71},
               {titulo: "FIFA", juego:"FIFA 22", precio: 15.63},
               {titulo: "Formula 1", juego:"F1 20", precio: 30.30},
               {titulo: "Formula 1", juego:"F1 21", precio: 57.49},
               {titulo: "Formula 1", juego:"F1 22", precio: 45.54}];

const carro = new Carro(0); 


// Ciclo while para preguntar si el usuario quiere seguir comprando o no
while (seguir) {
    juego = prompt("Elija el juego que desea adquirir para su PC. \n 1) Minecraft.\n 2) Call of Duty. \n 3) FIFA.\n 4) Formula 1.").toLowerCase();
    while ((juego != "1") && (juego != "2") && (juego != "3") && (juego != "4")){
        alert ("Error el juego elejido no se encuentra en nuestra lista");
        juego = prompt("Elija un juego de nuestra lista. \n 1) Minecraft.\n 2) Call of Duty. \n 3) FIFA.\n 4) Formula 1.").toLowerCase();
    }

    
    // Hago un switch para que el usuario elija su juego preferido y otro para que elija algunas de las opciones que tenga el juego elejido
    switch(juego){
        case "1" :
            titulo = prompt("Este juego puede Obtenerlo de manera gratuita o tiene la opcion premium ¿Cual desea adquirir? \n 1) Gratis \n 2) Premium");
            while ((titulo != "1") && (titulo != "2")){
                alert ("Error ingrese una opcion valida");
                titulo = prompt("Elija una opcion. \n 1) Gratis \n 2) Premium").toLowerCase();
            }
            switch(titulo){
                case "1":
                    alert("Usted eligió Minecraft Gratis (Precio: $0)");
                    carro.agregarAlCarro(game[0])
                    break;
                case "2":
                    alert("Usted eligió Minecraft Premium (Precio: $29.99 dolares)");
                    carro.agregarAlCarro(game[1])
                    break;
            }
            break;

        case "2":
            titulo = prompt("¿Cual Call of Duty quieres? \n 1) Modern Warfane 2 \n 2) Blcak Ops 3 \n 3) Ghost");
            while ((titulo != "1") && (titulo != "2") && (titulo != "3")){
                alert ("Error ingrese una opcion valida");
                titulo = prompt("Elija una opcion. \n 1) Modern Warfane 2 \n 2) Blcak Ops 3 \n 3) Ghost").toLowerCase();
            }
            switch(titulo){
                case "1":
                    alert("Usted eligió Call of Duty Modern Warfane 2 (Precio: $70.00 dolares)");
                    carro.agregarAlCarro(game[2])
                    break;
                case "2":
                    alert("Usted eligió Call of Duty Blcak Ops 3 (Precio: $42.00 dolares)");
                    carro.agregarAlCarro(game[3])
                    break;
                case "3":
                    alert("Usted eligió Call of Duty Ghost (Precio: $58.00 dolares)");
                    carro.agregarAlCarro(game[4])
                    break;
            }
            break;
        case "3":
           titulo = prompt("Tenemos varios juegos de FIFA ¿Cual elijes? \n 1) FIFA 20 \n 2) FIFA 21 \n 3) FIFA 22").toLowerCase();
            while ((titulo != "1") && (titulo != "2") && (titulo != "3")){
                alert ("Error ingrese una opcion valida");
                titulo = prompt("Elija una opcion. \n 1) FIFA 20 \n 2) FIFA 21 \n 3) FIFA 22").toLowerCase();
            }
            switch(titulo){
                case "1":
                    alert("Usted eligió FIFA 20 (Precio: $19.72 dolares)");
                    carro.agregarAlCarro(game[5])
                    break;
                case "2":
                    alert("Usted eligió FIFA 21 (Precio: $16.71 dolares)");
                    carro.agregarAlCarro(game[6])
                    break;
                case "3":
                    alert("Usted eligió FIFA 22 (Precio: $15.63 dolares)");
                    carro.agregarAlCarro(game[7])
                    break;
            }
            break;
        case "4":
            titulo = prompt("Tenemos varios juegos de Formula 1 ¿Cual elijes? \n 1) F1 20 \n 1) F1 21 \n 1) F1 22").toLowerCase();
            while ((titulo != "1") && (titulo != "2") && (titulo != "3")){
                alert ("Error ingrese una opcion valida");
                titulo = prompt("Elija una opcion." + "\n" + formulaUno.join('')).toLowerCase();
            }
            switch(titulo){
                case "1":
                    alert("Usted eligió F1 20 (Precio: $30.30 dolares)");
                    carro.agregarAlCarro(game[8])
                    break;
                case "2":
                    alert("Usted eligió F1 21 (Precio: $57.49 dolares)");
                    carro.agregarAlCarro(game[9])
                    break;
                case "3":
                    alert("Usted eligió F1 22 (Precio: $45.54 dolares)");
                    carro.agregarAlCarro(game[10])
                    break;
            }
            break;
    }

    let opcionUno = prompt("¿Desea seguir comprando? Si/No").toLowerCase();
    if (opcionUno == "no"){
        seguir = false;
    } 
}


alert(`Ver consola para ver la lista de productos`)
carro.MostrarCarrito()
alert(`El total de su compra es de: $${carro.total} dolares`);
alert("¡Muchas gracias por su compra!");