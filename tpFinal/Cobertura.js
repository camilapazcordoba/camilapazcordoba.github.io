class Cobertura {
  constructor(x, y) {
 //propiedades
    this.posX = x;
    this.posY = y;
    this.alto = 50;
    this.ancho = 80;
    this.vida = 3;
    this.estaVivo = true; //creo la cobertura
    this.imagen = imgPng[2];
  }
  
//metodo para dibujar los carroajes
  dibujar() {
    if (this.estaVivo) {
      imageMode(CENTER);
      image(this.imagen, this.posX, this.posY, this.ancho, this.alto);
    }
  }

//metodo para verificar si la toco una bala
  haTocadoLaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 30) { //calcula la distancia entre la cobertura y la bala
      this.vida --; //le reduce una vida
      bala.disparada = false;
      this.ancho -= 20; //reduce el ancho
      this.alto -= 10; //reduce el alto
      if (this.vida === 0) {
        this.estaVivo = false; //se elimino
      }
    }
  }
}
