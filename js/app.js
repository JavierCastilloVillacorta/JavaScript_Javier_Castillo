var Calculadora ={
  teclaOn: "",
  teclaSing: "",
  teclaRaiz: "",
  teclaDividido: "",
  teclaNumero7: "",
  teclaNumero8: "",
  teclaNumero9: "",
  teclaMultiplicar: "",
  teclaNumero4: "",
  teclaNumero5: "",
  teclaNumero6: "",
  teclaResta: "",
  teclaNumero1: "",
  teclaNumero2: "",
  teclaNumero3: "",
  teclaNumero0: "",
  teclaPunto: "",
  teclaIgual: "",
  teclaSuma: "",


  pantalla:"",
  digitoOperacion:"",
  operadorA: "",
  operadorB: "",
  operacion:"",
  resultadoOperacion: "",


  init: function(){
    var self = this
    this.pantalla = document.getElementById('display')
    this.teclaOn= document.getElementById('on')
    this.teclaSing = document.getElementById('sign')
    this.teclaRaiz= document.getElementById('sing')
    this.teclaRaiz= document.getElementById('raiz')
    this.teclaDividido= document.getElementById('dividido')
    this.teclaNumero7= document.getElementById('7')
    this.teclaNumero8= document.getElementById('8')
    this.teclaNumero9= document.getElementById('9')
    this.teclaMultiplicar= document.getElementById('por')
    this.teclaNumero4= document.getElementById('4')
    this.teclaNumero5= document.getElementById('5')
    this.teclaNumero6= document.getElementById('6')
    this.teclaResta = document.getElementById('menos')
    this.teclaNumero1= document.getElementById('1')
    this.teclaNumero2= document.getElementById('2')
    this.teclaNumero3= document.getElementById('3')
    this.teclaNumero0= document.getElementById('0')
    this.teclaPunto = document.getElementById('punto')
    this.teclaIgual= document.getElementById('igual')
    this.teclaSuma= document.getElementById('mas')


    // EVENTOS CLICK DE LAS IMAGENES - NUMEROS
    this.teclaNumero0.onmousedown = function(e){
      var numero = "0";
      self.agregaPantalla(numero)
      self.teclaNumero0.style="padding: 2%"
    }
    this.teclaNumero0.onmouseup = function(e){
      self.teclaNumero0.style="padding: 0px"
    }
    this.teclaNumero1.onmousedown = function(e){
      var numero = "1";
      self.agregaPantalla(numero)
      self.teclaNumero1.style="padding: 2%"
    }
    this.teclaNumero1.onmouseup = function(e){
      self.teclaNumero1.style="padding: 0px"
    }
    this.teclaNumero2.onmousedown = function(e){
      var numero = "2";
      self.agregaPantalla(numero)
      self.teclaNumero2.style="padding: 2%"
    }
    this.teclaNumero2.onmouseup = function(e){
      self.teclaNumero2.style="padding: 0px"
    }
    this.teclaNumero3.onmousedown = function(e){
      var numero = "3";
      self.agregaPantalla(numero);
      self.teclaNumero3.style="padding: 2%"
    }
    this.teclaNumero3.onmouseup = function(e){
      self.teclaNumero3.style="padding: 0px"
    }
    this.teclaNumero4.onmousedown = function(e){
      var numero = "4";
      self.agregaPantalla(numero);
      self.teclaNumero4.style="padding: 2%"
    }
    this.teclaNumero4.onmouseup = function(e){
      self.teclaNumero4.style="padding: 0px"
    }
    this.teclaNumero5.onmousedown = function(e){
      var numero = "5";
      self.agregaPantalla(numero)
      self.teclaNumero5.style="padding: 2%"
    }
    this.teclaNumero5.onmouseup = function(e){
      self.teclaNumero5.style="padding: 0px"
    }
    this.teclaNumero6.onmousedown = function(e){
      var numero = "6";
      self.agregaPantalla(numero)
      self.teclaNumero6.style="padding: 2%"
    }
    this.teclaNumero6.onmouseup = function(e){
      self.teclaNumero6.style="padding: 0px"
    }
    this.teclaNumero7.onmousedown = function(e){
      var numero = "7";
      self.agregaPantalla(numero)
      self.teclaNumero7.style="padding: 2%"
    }
    this.teclaNumero7.onmouseup = function(e){
      self.teclaNumero7.style="padding: 0px"
    }
    this.teclaNumero8.onmousedown = function(e){
      var numero = "8";
      self.agregaPantalla(numero)
      self.teclaNumero8.style="padding: 2%"
    }
    this.teclaNumero8.onmouseup = function(e){
      self.teclaNumero8.style="padding: 0px"
    }
    this.teclaNumero9.onmousedown = function(e){
      var numero = "9";
      self.agregaPantalla(numero)
      self.teclaNumero9.style="padding: 2%"
    }
    this.teclaNumero9.onmouseup = function(e){
      self.teclaNumero9.style="padding: 0px"
    }
    // EVENTO CLICK DE LAS IMAGENES - OPERADORES
    this.teclaSuma.onmousedown = function(e){
      self.agregaPantalla()
      self.operadorA = self.digitoOperacion
      self.operacion = "+"
      self.limpiarCalculadora()
      self.teclaSuma.style="padding: 2%"
    }
    this.teclaSuma.onmouseup = function(e){
      self.teclaSuma.style="padding: 0px"
    }
    this.teclaResta.onmousedown = function(e){
      console.log(self.operacion == "");
      if ((self.pantalla.textContent == "0" || self.pantalla.textContent == "") && self.operacion == "" ) {
        var numero = "-";
        self.agregaPantalla(numero);
      }else{
        self.operadorA = self.digitoOperacion
        self.operacion = "-"
        self.limpiarCalculadora()
      }
      self.teclaResta.style="padding: 2%"
    }
    this.teclaResta.onmouseup = function(e){
      self.teclaResta.style="padding: 0px"
    }
    this.teclaMultiplicar.onmousedown = function(e){
      self.agregaPantalla()
      self.operadorA = self.digitoOperacion
      self.operacion = "*"
      self.limpiarCalculadora()
      self.teclaMultiplicar.style="padding: 2%"
    }
    this.teclaMultiplicar.onmouseup = function(e){
      self.teclaMultiplicar.style="padding: 0px"
    }
    this.teclaDividido.onmousedown = function(e){
      self.agregaPantalla()
      self.operadorA = self.digitoOperacion
      self.operacion = "/"
      self.limpiarCalculadora()
      self.teclaDividido.style="padding: 2%"
    }
    this.teclaDividido.onmouseup = function(e){
      self.teclaDividido.style="padding: 0px"
    }
    // EVENTO CLICK DE LAS IMAGENES OTRAS
    this.teclaOn.onmousedown = function(e){
      self.resetCalculadora()
      self.teclaOn.style="padding: 2%"
    }
    this.teclaOn.onmouseup = function(e){
      self.teclaOn.style="padding: 0px"
    }
    this.teclaIgual.onmousedown = function(e){
      self.operadorB = self.digitoOperacion
      if (self.operadorA == "" || self.operadorB == "") {
        alert("Complete Opercion")
      }else{
        self.resolverProblema()
      }
      self.teclaIgual.style="padding: 2%"
    }
    this.teclaIgual.onmouseup = function(e){
      self.teclaIgual.style="padding: 0px"
    }
    this.teclaPunto.onmousedown = function(e){
      self.verificaDecimal()
      self.teclaPunto.style="padding: 2%"
    }
    this.teclaPunto.onmouseup = function(e){
      self.teclaPunto.style="padding: 0px"
    }
    this.teclaSing.onmousedown= function(e){
      self.pantalla.textContent = parseFloat(self.pantalla.textContent) * -1
      if (self.pantalla.textContent == "0" || self.pantalla.textContent == "") {
        var numero = "0"
      }else {
        var numero = ""
      }

      self.agregaPantalla(numero)
      self.teclaSing.style="padding: 2%"
    }
    this.teclaSing.onmouseup = function(e){
      self.teclaSing.style="padding: 0px"
    }


  },
  agregaPantalla: function(numero){

    if (this.pantalla.textContent == "0") {
      this.pantalla.textContent = ""
    }
    if (this.pantalla.textContent.length < 8) {
      this.digitoOperacion = this.pantalla.textContent + numero
      this.pantalla.textContent = this.digitoOperacion
    }else{
      this.digitoOperacion = this.digitoOperacion + numero
      this.pantalla.textContent = this.pantalla.textContent.slice(1)
      this.pantalla.textContent = this.pantalla.textContent + numero
    }
  },

  resetCalculadora: function(){
    this.operadorA = ""
    this.operadorB = ""
    this.pantalla.textContent = "0"
    this.digitoOperacion=""

  },
  limpiarCalculadora: function(){
   this.pantalla.textContent = ""
 },
 resolverProblema: function(){
   console.log(parseFloat(this.operadorA) +" / "+this.operacion+" / "+ parseFloat (this.operadorB));
   switch (this.operacion) {
     case "+":
      this.resultadoOperacion = parseFloat(this.operadorA) + parseFloat (this.operadorB)
       break;
    case "-":
      this.resultadoOperacion = parseFloat(this.operadorA) - parseFloat (this.operadorB)
      break;
    case "*":
      this.resultadoOperacion = parseFloat(this.operadorA) * parseFloat (this.operadorB)
      break;
    case "/":
      this.resultadoOperacion = parseFloat(this.operadorA) / parseFloat (this.operadorB)
      break;
     default:
   }
   //this.resetCalculadora();

   this.resultadoOperacion = this.resultadoOperacion .toString();
   this.resultadoOperacion = this.resultadoOperacion.toString()
   if (this.resultadoOperacion.length <= 8) {
     this.pantalla.textContent= this.resultadoOperacion
   }else{
     this.pantalla.textContent= this.resultadoOperacion.substr(0,8)
   }
   this.operadorA = this.pantalla.textContent;
   //this.digitoOperacion = this.pantalla.textContent;
   console.log(this.pantalla.textContent +"///"+this.resultadoOperacion + " digito : "+ this.digitoOperacion);

 },
 verificaDecimal: function(){
  posicion = this.pantalla.textContent.indexOf(".");
  if( posicion == -1 ) {
     this.pantalla.textContent = this.pantalla.textContent + "."
  }else{
    alert("Solo un punto")
  }
 }


}

Calculadora.init();
