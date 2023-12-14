class PantallaDosBotones {
  constructor(img, btnUnoX, btnUnoY, btnDosX, btnDosY, pSiguiente, pSiguienteDos, imgBtn1, imgBtn2, textoY, linea1, linea2, linea3) { //parametros
//variables
    this.img = img;
    this.ancho = 600;
    this.alto = 400;
    this.pSiguiente = pSiguiente;
    this.pSiguienteDos = pSiguienteDos;
    this.botonUno = new Boton(btnUnoX, btnUnoY, imgBtn1); //declaro boton uno
    this.BotonDos = new Boton(btnDosX, btnDosY, imgBtn2); //declaro boton dos
    this.texto = new Texto(textoY, linea1, linea2, linea3); //texto 
  }
  
//metodo
  dibujar() {
    imageMode(CORNER, CORNER);
    image(this.img, 0, 0, this.ancho, this.alto);
    this.botonUno.dibujar(); //se llama a la clase boton, metodo dibujar
    this.BotonDos.dibujar(); //se llama a la clase boton, metodo dibujar
    this.texto.dibujar(); //llama a la clase texto
  }

//se lo pasa a la clase un boton
//si es verdadero, lo que retorna la siguiente pantalla
  click(btn) {
    if (this.botonUno.click(btn, this.textoBtn1)) {
      return this.pSiguiente;
    }
    if (this.BotonDos.click(btn, this.textoBtn2)) {
      return this.pSiguienteDos;
    }
  }
}
