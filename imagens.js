// imagens e sons do jogo

let imgEstrada;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;

let trilhaSonora;
let somColisao;
let somPonto;

function preload(){
  imgEstrada = loadImage("imagens/estradanova.png");
  imgAtor = loadImage ("imagens/robozin.png");
  imgCarro1 = loadImage ("imagens/carro1.png");
  imgCarro2 = loadImage ("imagens/carro2.png");
  imgCarro3 = loadImage ("imagens/carro3.png");
  imgCarros = [imgCarro1, imgCarro2, imgCarro3];
  imgCarros2 = [imgCarro1, imgCarro2, imgCarro3]
  
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
};
