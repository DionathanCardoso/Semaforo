const img = document.getElementById("img");
const button = document.getElementById("buttons");
let colorIndex = 0;


const TrafficLight = (event) => {
    turnOn[event.target.id]();
}

const nexIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nexIndex();
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => setInterval(changeColor, 1000),
}


button.addEventListener("click", TrafficLight);
