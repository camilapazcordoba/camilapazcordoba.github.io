class Personaje {
  constructor() {
//variables
    this.posX = width/2;
    this.posY = height-30;
    this.velocidad = 5;
    this.bala = new Bala();
    this.imagen = imgPng[0];
  }

//metodo para dibujar
  dibujar() {
    this.bala.dibujar();
    imageMode(CENTER);
    image(this.imagen, this.posX, this.posY, 65, 65);
  }
//metodo para moverse de izq a der
  mover(keyCode, pantalla) {
    if (keyCode === RIGHT_ARROW && keyIsDown(RIGHT_ARROW) && this.posX + 25 < width ) {
      this.posX += this.velocidad;
    } else if (keyCode === LEFT_ARROW && keyIsDown(LEFT_ARROW) && this. posX - 25 > 0) {
      this.posX += -this.velocidad;
    }
  }
//metodo para disparar la bala
//se controla si se disparo la bala o no
  disparo(btn, pantalla) {
    if (keyCode === 32) {
      if (this.bala.disparada == false) {
        this.dispararBala();
      }
    }
  }

  dispararBala() {
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar();
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }
}
