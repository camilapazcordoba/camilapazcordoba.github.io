class Juego {
  constructor(pSiguienteGanar, pSiguientePerder) {
//variables
    this.personaje = new Personaje();
    this.crearEnemigo();
    this.crearCobertura();
    this.imgFondo = imagenesJuego[0];
    this.finalizo = false;
    this.pSiguienteGanar = pSiguienteGanar;
    this.pSiguientePerder = pSiguientePerder;
  }
  
//metodos
  dibujar() {
    this.fondo();
    this.personaje.dibujar();
    this.dibujarEnemigo();
    this.dibujarCobertura();
    this.controlarDisparoCobertura();
    this.controlarDisparo();
    this.puntaje();
    this.controlarGanaroPerder();
  }

  fondo() {
    imageMode(CENTER);
    image(this.imgFondo, width/2, height/2, 700, 500);
  }
//crea a los enemigos
  crearEnemigo() {
    this.enemigos = []; //arreglo
    this.offset = 0;
    for (let i = 0; i <6; i++) {
      this.enemigos[i] = new Enemigo(i * 80 + 80, 60, 5); //fila superior de enemigos
    }
    for (let j = 6; j < 12; j++) {
      this.enemigos[j] = new Enemigo(this.offset * 80 + 80, 55 + 60, 5); //fila inferior de enemigos
      this.offset++;
    }
  }
  
//dibujo los enemigos 
  dibujarEnemigo() {
    this.enemigo = new Enemigo()

      for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].dibujar();
      this.enemigos[i].movimiento();
      if ( this.enemigos[i].posX +25 > width || this.enemigos[i].posX -25 < 0) {
        this.enemigo.borde =true;
      }
    }

    this.bordePantalla();
  }
//Creo las coberturas echas con los carruajes
  crearCobertura() {
    this.Coberturas = [];
    for (let i = 0; i <3; i++) {
      this.Coberturas[i] = new Cobertura(200 * i +100, 300)
    }
  }
//las dibujo
  dibujarCobertura() {
    this.Cobertura = new Enemigo()

      for (let i = 0; i < this.Coberturas.length; i++) {
      this.Coberturas[i].dibujar();
    }
  }

// para que cuando los enemigos toque el borde de la pantalla bajen y se muevan hacia el lado opuesto
  bordePantalla() {
    if (this.enemigo.borde) {
      for (let j = 0; j < this.enemigos.length; j++) {
        this.enemigos[j].movimientoAbajo();
      }
    }
  }
  
//controla si disparaste una bala y si la bala pego en el enemigo
//el metodo de la clase enemigo .haTocadoBala, le retorna si pego o no
  controlarDisparo() {
    //control para eliminar enemigos
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i <this.enemigos.length; i++) {
        if (this.enemigos[i].haTocadoLaBala(this.personaje.bala)) {
        }
        if (!this.enemigos[i].estaVivo) {
          this.enemigos.splice(i, 1)
        }
      }
    }
  }
  
//posicion de la bala y la cobertura
//la cobertura se encarga de fijarse si le pego la bala
  controlarDisparoCobertura() {
    //control para eliminar cobertura
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i <this.Coberturas.length; i++) {
        if (this.Coberturas[i].haTocadoLaBala(this.personaje.bala, this.puntos)) {
        }
        if (!this.Coberturas[i].estaVivo) {
          this.Coberturas.splice(i, 1)
        }
      }
    }
  }
  
//le retorna a la clase aventura que pantalla mostrar si gana o si pierde
  controlarGanaroPerder() {
    if (this.enemigos.length == 0 ) {
      return this.pSiguienteGanar;
    } else if (this.enemigos.length >= 1 && this.enemigo.posYPerder(this.enemigos) > 180) { //si los enemigos llegan a cierta altura perdimos
      return this.pSiguientePerder; //gano
    }
  }
  
//metodo del juego finalizado 
  juegoFinalizado() {
    if (this.enemigos.length == 0 ) {
      return  this.finalizo = true;
    } else if (this.enemigos.length >= 1 && this.enemigo.posYPerder(this.enemigos) > 180) {
      return  this.finalizo = true;
    } else {
      return  this.finalizo = false;
    }
  }
  
//metodo para ver el puntaje
//son la cantidad de enemigos que figuran arriba, va disminuyendo 
  puntaje() {
    fill(0);
    rectMode(CORNER);
    rect(0, 0, width, 30);
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text("Enemigos: " + this.enemigos.length, width/2, 15);
  }

//se lo pasa a la clase personaje para que se mueva
  btnApretado(btn) {
    this.personaje.mover(btn, this.pantallaActual)
  }

//se lo pasa a la clase personaje para que dispare
  btnTipeado(btn) {
    this.personaje.disparo(btn, this.pantallaActual);
  }
}
