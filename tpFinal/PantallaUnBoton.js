class PantallaUnBoton {
  constructor(img, btnX, btnY, pSiguiente, imgBtn, textoY, linea1, linea2, linea3) {
//variables   
    this.img = img;
    this.ancho = 600;
    this.alto = 400;
    this.btnX = btnX;
    this.btnY = btnY;
    this.pSiguiente = pSiguiente;
    this.imgBtn = imgBtn;
    this.boton = new Boton(this.btnX, this.btnY, imgBtn); //donde esta ubicado(parametros)
    this.texto = new Texto(textoY, linea1, linea2, linea3); //texto en pantalla (parametros)
  }
//metodo 
  dibujar() {
    imageMode(CORNER, CORNER);
    image(this.img, 0, 0, this.ancho, this.alto);
    this.boton.dibujar(); //llama a la clase boton
    this.texto.dibujar(); //llama a la clase texto
  }

//se lo pasa a la clase boton
  click(btn) {
    if (this.boton.click(btn)) {
      return this.pSiguiente;
    }
  }
}
