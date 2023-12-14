class Boton {
  constructor(x, y, img) {
//variables
    this.posX = x;
    this.posY = y;
    this.w = 120;
    this.h= 60;
    
    this.img = img;
  }
//metodo de dibujar el boton
  dibujar() {
    imageMode(CENTER, CENTER);
    image(this.img, this.posX, this.posY, this.w, this.h);
  }
  
//de aca se controla el click
//si se hace click en pantalla retorna verdadero
//retorna que pantalla se va a ver
  click(btn) {
    if (dist(this.posX, this.posY, mouseX, mouseY) < 40 ) {
      return true;
    }
  }
}
