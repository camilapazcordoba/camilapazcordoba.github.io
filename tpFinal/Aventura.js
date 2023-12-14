class Aventura {
  constructor() {
    this.inicializar() //llama al metodo inicializar
  }

//metodo
  dibujar() {
    textFont(fuente);
    if (this.verPantalla == 0) { //se inicia
      this.inicializar();
    }

    if (this.verPantalla == 14) {
      this.juego.dibujar(); //llama a la clase juego y se dibuje
      if (this.juego.juegoFinalizado()) {
        this.verPantalla = this.juego.controlarGanaroPerder();
      }
    } else {
      this.pantallas[this.verPantalla].dibujar();
    }
  }
  
//metodo que configura el estado inicial del objeto aventura
//las variables vuelvan a cero
  inicializar() {
 //propiedades de inicializar
    this.pantallas = [];
    this.cargarPantallas(lineas);
    this.verPantalla = 0;
    this.juego = new Juego(15, 16)
  }

  cargarPantallas(lineas) {
    //Organizacion de parametros
    //img, btnX, btnY, pSiguiente, textoBtn, imgBtn, textoY, linea1, linea2, linea3
    //PantallaDosBotones img, btnUnoX, btnUnoY, btnDosX, btnDosY, pSiguiente, pSiguienteDos, textoBtn1, textoBtn2, textoY, linea1, linea2, linea3

    this.pantallas[0] = new PantallaUnBoton(imgs[0], 300, 360, 1, imagenesJuego[5]);
    this.pantallas[1] = new PantallaUnBoton(imgs[1], 300, 360, 2, imagenesJuego[6], 60, lineas[0], lineas[1], lineas[2]);
    this.pantallas[2] = new PantallaDosBotones(imgs[2], 230, 350, 370, 350, 3, 4, imagenesJuego[7], imagenesJuego[8], 280, lineas[3], lineas[4], lineas[5]);
    this.pantallas[3] = new PantallaUnBoton(imgs[11], 300, 350, 0, imagenesJuego[9], 60, lineas[6], lineas[7], lineas[8]);//primer final
    this.pantallas[4] = new PantallaUnBoton(imgs[3], 300, 360, 5, imagenesJuego[6], 60, lineas[9], lineas[10], lineas[11]);
    this.pantallas[5] = new PantallaUnBoton(imgs[4], 300, 360, 6, imagenesJuego[6], 60, lineas[12], lineas[13], lineas[14]);
    this.pantallas[6] = new PantallaDosBotones(imgs[4], 230, 350, 370, 350, 7, 9, imgs[12], imgs[5], 60, lineas[15], lineas[16], lineas[17]);
    this.pantallas[7] = new PantallaUnBoton(imgs[12], 300, 360, 8, imagenesJuego[6], 60, lineas[18], lineas[19], lineas[20]);//desvio a final 2
    this.pantallas[8] = new PantallaUnBoton(imgs[13], 300, 360, 0, imagenesJuego[9], 60, lineas[21], lineas[22], lineas[23]);//segundo final
    this.pantallas[9] = new PantallaUnBoton(imgs[5], 300, 360, 10, imagenesJuego[6], 280, lineas[24], lineas[25], lineas[26]);
    this.pantallas[10] = new PantallaUnBoton(imgs[6], 300, 360, 11, imagenesJuego[6], 280, lineas[27], lineas[28], lineas[29]);
    this.pantallas[11] = new PantallaUnBoton(imgs[7], 300, 360, 12, imagenesJuego[6], 280, lineas[30], lineas[31], lineas[32]);
    this.pantallas[12] = new PantallaUnBoton(imgs[16], 300, 360, 13, imagenesJuego[6], 280, lineas[33], lineas[34], lineas[35]);
    //pantalla explicacion del juego
    this.pantallas[13] = new PantallaUnBoton(imagenesJuego[1], 300, 330, 14, imagenesJuego[6]);
    this.pantallas[15] = new PantallaUnBoton(imagenesJuego[2], 300, 280, 18, imagenesJuego[6]);//ganar
    this.pantallas[16] = new PantallaUnBoton(imagenesJuego[3], 300, 280, 17, imagenesJuego[6]);//perder
    //final despues de perder
    this.pantallas[17] = new PantallaUnBoton(imgs[17], 300, 360, 0, imagenesJuego[9], 60, lineas[36], lineas[37], lineas[38]);
    //final despues de Ganar
    this.pantallas[18] = new PantallaUnBoton(imgs[8], 300, 360, 19, imagenesJuego[6], 280, lineas[39], lineas[40], lineas[41]);
    this.pantallas[19] = new PantallaUnBoton(imgs[9], 300, 360, 20, imagenesJuego[6], 280, lineas[42], lineas[43], lineas[44]);
    this.pantallas[20] = new PantallaUnBoton(imgs[10], 300, 360, 21, imagenesJuego[6], 60, lineas[45], lineas[46], lineas[47]);
    this.pantallas[21] = new PantallaUnBoton(imagenesJuego[4], 300, 280, 0, imagenesJuego[10]);
  }

//aventura se lo paso a pantalla un boton o dos botones
//esas clases se lo pasan a la clase boton
//aca se controla si se esta haciendo click en la pantalla, para que no de error
  click(btn) {
    if (this.pantallas[this.verPantalla].click(btn)) {
      this.proximaPantalla = this.pantallas[this.verPantalla].click(btn); //evalua si el click de la pantalla actual devuelve verdadero
      this.verPantalla = this.proximaPantalla; //si es verdadero, se actualiza a la proxima pantalla
    } else if (this.pantallas[this.verPantalla].click(btn) === 0) {
      this.proximaPantalla = 0; //si no es verdadero
      this.verPantalla = this.proximaPantalla;
    }
  }

//controla la pantalla que te muestra, retornando de la clase juego
  pantallaGanoOPerdio() {
    this.verPantalla = this.pantallas[this.verPantalla].controlarGanaroPerder();
  }

//Se lo pasa a la clase juego
  btnApretado(btn) {
    this.juego.btnApretado(btn);
  }

//se lo pasa a la clase juego
  btnTipeado(btn) {
    this.juego.btnTipeado(btn);
  }
}
