const img = document.getElementById("img");
const button = document.getElementById("buttons");
let colorIndex = 0;
let intervalid = null;

//Área que vai interagir com o cliente.
const TrafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

//Área do automático
const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();

    // Alterado de index da arrow colors.
    function nexIndex() {
        colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    }
    nexIndex();
}
//Função para parar o automático.
const stopAutomatic = () => {
    clearInterval(intervalid);
}

//Objetos para a localização da cor.
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalid = setInterval(changeColor, 1000),
}


button.addEventListener("click", TrafficLight);
