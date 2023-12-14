class Bala {
  constructor(posX, posY) { //parametros
  //variables
    this.posX = posX;
    this.posY = posY;
    this.diametro = 10;
    this.disparada = false;
  }
//metodo
  dibujar() {
    if (this.disparada) { //si es disparada se dibuja
      noStroke();
      fill(103, 25, 25);
      ellipse(this.posX, this.posY, this.diametro, this.diametro);
      this.mover();
      this.controlarPosY();
    }
  }

//para que se mueva la bala
  mover() {
    this.posY -= 7;
  }

  disparar() {
    this.disparada = true;
  }

//si la posY es menor a cero, disparada se vuelve falso, y ahi podes volver a apretar la barra esp para disparar de nuevo
  controlarPosY() {

    if (this.posY < 0 && this.disparada) {
      this.disparada = false;
    }
  }
}
