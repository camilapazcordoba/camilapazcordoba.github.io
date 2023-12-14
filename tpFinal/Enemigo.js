class Enemigo {
//propiedades
  constructor(posX, posY, puntaje) {
    this.posX = posX;
    this.posY = posY;
    this.estaVivo = true;
    this.puntos = puntaje;
    this.xDir = 1;
    this.borde = false;
    this.movAbajo = 15;
    this.imagen = imgPng[1];
  }
  
//metodo 
  dibujar() {
    if (this.estaVivo) {
      imageMode(CENTER);
      image(this.imagen, this.posX, this.posY, 50, 50);
    }
  }
  
//metodo para moverse de izq a der
  movimiento() {
    this.posX = this.posX + this.xDir;
  }
  
//metodo para moverse hacia abajo cuando toca el borde
  movimientoAbajo() {
    this.xDir = -this.xDir;
    this.posY = this.posY + this.movAbajo;
  }
  
//se controla si la bala le pego
//y le retorna a la clase juego dicha accion
  haTocadoLaBala(bala, puntos) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 30) {
      this.estaVivo = false;
      bala.disparada = false;
    }
  }

//metodo para que si los enemigos llegan a cierta altura perdemos
  posYPerder(enemigos) {
    for (let i = 0; i < enemigos.length; i++) {
      return enemigos[i].posY;
    }
  }
}
