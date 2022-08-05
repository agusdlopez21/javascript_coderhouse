class videoJuego {
    constructor(id, titulo, juego, precio) {
        this.id = id;
        this.titulo = titulo;
        this.juego = juego;
        this.precio = precio;
    }
}


/*class Carro {
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
}*/

const game = [ {id: "1", titulo: "Minecraft", juego:"Gratis", precio: 0},
               {id: "2", titulo: "Minecraft", juego:"Premium", precio: 29.99},
               {id: "3", titulo: "Call of Duty", juego:"Modern Warfane 2", precio: 70.00},
               {id: "4", titulo: "Call of Duty", juego:"Blcak Ops 2", precio: 42.00},
               {id: "5", titulo: "Call of Duty", juego:"Ghost", precio: 58.00},
               {id: "6", titulo: "FIFA", juego:"FIFA 20", precio: 19.72},
               {id: "7", titulo: "FIFA", juego:"FIFA 21", precio: 16.71},
               {id: "8", titulo: "FIFA", juego:"FIFA 22", precio: 15.63},
               {id: "9", titulo: "Formula 1", juego:"F1 20", precio: 30.30},
               {id: "10", titulo: "Formula 1", juego:"F1 21", precio: 57.49},
               {id: "11", titulo: "Formula 1", juego:"F1 22", precio: 45.54},
               {id: "11", titulo: "Formula 1", juego:"F1 22", precio: 45.54}, //Rellena espacio
               {id: "11", titulo: "Formula 1", juego:"F1 22", precio: 45.54}]; //Rellena espacio

// const carro = new Carro(0); 


let games = [game[0],game[1],game[2],game[3],game[4],game[5],game[6],game[7],game[8],game[9],game[10],game[11],game[12]];

let divGames = document.getElementById('divGames')

games.forEach(game => {
    divGames.innerHTML += `
        <div class="card mb-4" id="game${game.id}" style="width: auto;">
            <img src="/img/game${game.id}.jpg" class="card-img-center" alt="..." style="height:15rem;">
            <div class="card-body">
                <h5 class="card-title">${game.titulo} ${game.juego}</h5>
                <p class="card-text">$ ${game.precio}</p>
                <a href="#" class="btn btn-success">Comprar</a>
            </div>
        </div>`
}) 