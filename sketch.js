


function setup() {
  createCanvas(600, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  mostraCarro2();
  movimentaCarro();
  movimentaCarro2();
  movimentaAtor();
  reiniciaCarro();
  reiniciaCarro2();
  verificaColisao();
  verificaColisao2();
  exibePontos();
  marcaPonto();
}






