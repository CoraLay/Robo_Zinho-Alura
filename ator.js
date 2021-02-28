// codigo do ator

let yAtor = 358;
let xAtor = 290;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, 50, 45);
}

function movimentaAtor(){
  if (keyIsDown (UP_ARROW) ){
          yAtor -= 3;      
      }  
  if (keyIsDown (DOWN_ARROW) ){
        if(podeSeMover()){
      yAtor += 3;
      }
  }
  if (keyIsDown (LEFT_ARROW) ){
      xAtor -= 3;
      }
  if (keyIsDown (RIGHT_ARROW) ){
      xAtor += 3;
      }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao (){
  for (let i = 0; i < imgCarros.length; i+=1){
    colisao = collideRectCircle (xCarros[i], yCarros[i], compCarro, alturaCarro, xAtor, yAtor, 0)
    if(colisao){
      retornaAtor(); 
      somColisao.play();
      if (pontosPositivo()){
      pontos -= 1;
      }
    };
  }  
}

function verificaColisao2 (){
  for (let i = 0; i < imgCarros2.length; i+=1){
    colisao = collideRectCircle (xCarros2[i], yCarros2[i], compCarro, alturaCarro, xAtor, yAtor, 2)
    if(colisao){
      retornaAtor(); 
      somColisao.play();
      if (pontosPositivo()){
      pontos -= 1;
      }
    };
  }  
}

function retornaAtor (){
  yAtor = 358;
}

function exibePontos (){
  textAlign(CENTER);
  textSize(25);
  fill(255, 255, 0)
  text(pontos, 310, 28)
}

function marcaPonto(){
  if (yAtor < 13){
    somPonto.play();
    pontos +=1;
    retornaAtor();
  }
}

function pontosPositivo(){
  return pontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}