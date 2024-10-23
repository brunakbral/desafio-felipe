let nomeHeroi = "Bruna";
let pontosHeroi = 10001;
let nivel = [
    "ferro", 
    "bronze", 
    "prata", 
    "ouro", 
    "platina", 
    "ascendente", 
    "imortal", 
    "radiante"
];
let nivelHeroi = "";


switch (true) {
    case (pontosHeroi <= 1000):
        nivelHeroi = nivel[0];
        break;
    case (pontosHeroi >= 1001 && pontosHeroi <= 2000):
        nivelHeroi = nivel[1];
        break;
    case (pontosHeroi >= 2001 && pontosHeroi <= 5000):
        nivelHeroi = nivel[2];
        break;
    case (pontosHeroi >= 5001 && pontosHeroi <= 7000):
        nivelHeroi = nivel[3];
        break;
    case (pontosHeroi >= 7001 && pontosHeroi <= 8000):
        nivelHeroi = nivel[4];
        break;
    case (pontosHeroi >= 8001 && pontosHeroi <= 9000):
        nivelHeroi = nivel[5];
        break;
    case (pontosHeroi >= 9001 && pontosHeroi === 10000):
        nivelHeroi = nivel[6];
        break;
    default:
        nivelHeroi = nivel[7];
}
console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi);
