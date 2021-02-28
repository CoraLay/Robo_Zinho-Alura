// codigo do carro

let yCarros2 = [208, 257, 308];
let xCarros2 = [-50, -50, -50];
let velCarros2 = [3.5, 6.5, 4.2];

function mostraCarro2(){
  for (i = 0; i < imgCarros2.length; i+=1){
    image(imgCarros2[i], xCarros2[i], yCarros2[i], compCarro, alturaCarro); 
  }
}

function movimentaCarro2(){
  for (i = 0; i < imgCarros2.length; i +=1)
  xCarros2[i] += velCarros2[i];
}

function reiniciaCarro2(){
  for (i = 0; i < imgCarros2.length; i+=1){
    if (passouTodaTela2(xCarros2[i])){
      xCarros2[i] = -50;
    }
  }
}

function passouTodaTela2(xCarro2){
  return xCarro2 > 600;
}