// codigo do carro

let yCarros = [43, 95, 147];
let xCarros = [600, 600, 600];
let velCarros = [6.8, 3.9, 6];
let compCarro = 60;
let alturaCarro = 40;

function mostraCarro(){
  for (i = 0; i < imgCarros.length; i+=1){
    image(imgCarros[i], xCarros[i], yCarros[i], compCarro, alturaCarro); 
  }
}

function movimentaCarro(){
  for (i = 0; i < imgCarros.length; i +=1)
  xCarros[i] -= velCarros[i];
}

function reiniciaCarro(){
  for (i = 0; i < imgCarros.length; i+=1){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}