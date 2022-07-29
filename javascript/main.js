let precio = 0;
let opcion;
let juego;
let total = 0;
let seguir = true;


//Arrays
const catalogo = ["1) Minecraft.\n", "2) Call of Duty.\n", "3) FIFA.\n", "4) Formula 1.\n"];
const callOfDuty = ["1) Modern Warfane 2.\n", "2) Black Ops 3.\n", "3)Ghost.\n"];
const fifa = ["1) FIFA 20.\n", "2) FIFA 21.\n", "3) FIFA 22.\n"];
const formulaUno = ["1) F1 20.\n", "2) F1 21.\n", "3) F1 22.\n"];


// Ciclo while para preguntar si el usuario quiere seguir comprando o no
while (seguir) {
    juego = prompt("Elija el juego que desea adquirir para su PC." + "\n" + catalogo.join('')).toLowerCase();
    while ((juego != "1") && (juego != "2") && (juego != "3") && (juego != "4")){
        alert ("Error el juego elejido no se encuentra en nuestra lista");
        juego = prompt("Elija un juego de nuestra lista." + "\n" + catalogo.join('')).toLowerCase();
    }

    
    // Hago un switch para que el usuario elija su juego preferido y otro para que elija algunas de las opciones que tenga el juego elejido
    switch(juego){
        case "1" :
            opcion = prompt("Este juego puede Obtenerlo de manera gratuita o tiene la opcion premium ¿Cual desea adquirir? (Gratis o  Premium)").toLowerCase();
            while ((opcion != "gratis") && (opcion != "premium")){
                alert ("Error ingrese una opcion valida");
                opcion = prompt("Elija una opcion. (Gratis o Premium)").toLowerCase();
            }
            switch(opcion){
                case "gratis":
                    alert("Usted eligió Minecraft Gratis (Precio: $0)");
                    Sumar(0);
                    break;
                case "premium":
                    alert("Usted eligió Minecraft Premium (Precio: $29.99 dolares)");
                    Sumar(29.99);
                    break;
            }
            break;

        case "2":
            opcion = prompt("¿Cual Call of Duty quieres?" + "\n" + callOfDuty.join(''));
            while ((opcion != "1") && (opcion != "2") && (opcion != "3")){
                alert ("Error ingrese una opcion valida");
                opcion = prompt("Elija una opcion." + "\n" + callOfDuty.join('')).toLowerCase();
            }
            switch(opcion){
                case "1":
                    alert("Usted eligió Call of Duty Modern Warfane 2 (Precio: $70.00 dolares)");
                    Sumar(70.00);
                    break;
                case "2":
                    alert("Usted eligió Call of Duty Blcak Ops 3 (Precio: $42.00 dolares)");
                    Sumar(42.00);
                    break;
                case "3":
                    alert("Usted eligió Call of Duty Ghost (Precio: $58.00 dolares)");
                    Sumar(67.00);
                    break;
            }
            break;
        case "3":
            opcion = prompt("Tenemos varios juegos de FIFA ¿Cual elijes?" + "\n" + fifa.join('')).toLowerCase();
            while ((opcion != "1") && (opcion != "2") && (opcion != "3")){
                alert ("Error ingrese una opcion valida");
                opcion = prompt("Elija una opcion. (FIFA 20, FIFA 21, FIFA 22)").toLowerCase();
            }
            switch(opcion){
                case "1":
                    alert("Usted eligió FIFA 20 (Precio: $19.72 dolares)");
                    Sumar(19.72);
                    break;
                case "2":
                    alert("Usted eligió FIFA 21 (Precio: $16.71 dolares)");
                    Sumar(16.71);
                    break;
                case "3":
                    alert("Usted eligió FIFA 22 (Precio: $15.63 dolares)");
                    Sumar(15.63);
                    break;
            }
            break;
        case "4":
            opcion = prompt("Tenemos varios juegos de Formula 1 ¿Cual elijes?" + "\n" + formulaUno.join('')).toLowerCase();
            while ((opcion != "1") && (opcion != "2") && (opcion != "3")){
                alert ("Error ingrese una opcion valida");
                opcion = prompt("Elija una opcion." + "\n" + formulaUno.join('')).toLowerCase();
            }
            switch(opcion){
                case "1":
                    alert("Usted eligió F1 20 (Precio: $30.30 dolares)");
                    Sumar(30.30);
                    break;
                case "2":
                    alert("Usted eligió F1 21 (Precio: $57.49 dolares)");
                    Sumar(57.49);
                    break;
                case "3":
                    alert("Usted eligió F1 22 (Precio: $45.54 dolares)");
                    Sumar(45.54);
                    break;
            }
            break;
    }

    let opcionUno = prompt("¿Desea seguir comprando? Si/No").toLowerCase();
    if (opcionUno == "no"){
        seguir = false;
        break;
    } 
}

//Funcion para sumar el precio total de la compra 
function Sumar(precio){
    total +=precio;
    precioFinal = total.toFixed(2);
    return precioFinal;
}

alert(`El total de su compra es de: $${total} dolares`);
alert("¡Muchas gracias por su compra!");