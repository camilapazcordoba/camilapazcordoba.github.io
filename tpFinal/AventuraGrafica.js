//arreglos de imagenes
let imgs = [];
let imagenesJuego = [];
let imgPng = [];
//declaro 
let lineas; 
let aventura; //nombro el objeto
let fuente;

function preload() {

  for (let i=0; i < 18; i++) { //cargar imagenes Pantallas aventura
    imgs[i] = loadImage('data/imagen' +(i)+ '.jpg');
  }

  for (let i=0; i < 11; i++) {// Pantallas Juego
    imagenesJuego[i] = loadImage('data/img' +(i)+ '.jpg');
  }

  for (let i=0; i < 3; i++) {// Pngs juegos
    imgPng[i] = loadImage('data/png' +(i)+ '.png');
  }

  lineas = loadStrings("data/textos.txt");//cargar archivo de texto
  
  fuente = loadFont('data/IMFellDWPica-Italic.ttf');
}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.center();
  aventura = new Aventura(); //creo el objeto aventura a partir de la clase aventura
 
}

//todas las fx a partir del objeto aventura

function draw() {
  keyPressed();
  aventura.dibujar(); 
}

function mouseClicked() {
  aventura.click(mouseButton);
}

function keyPressed() {
  aventura.btnApretado(keyCode) ;
}

function keyTyped() {
  aventura.btnTipeado(keyCode);
}
