var Calculadora ={
  teclaOn: "",
  teclaSing: "", // +/-
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
  operadorA: "",
  operadorB: "",
  operacion:"",
  resultadoOperacion: "",


  init: function(){
    var self = this
    this.pantalla = document.getElementById('display')
    this.teclaOn= document.getElementById('on')
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
    this.teclaNumero0.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "0"
    }
    this.teclaNumero1.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "1"
    }
    this.teclaNumero2.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "2"
    }
    this.teclaNumero3.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "3"
    }
    this.teclaNumero4.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "4"
    }
    this.teclaNumero5.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "5"
    }
    this.teclaNumero6.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "6"
    }
    this.teclaNumero7.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "7"
    }
    this.teclaNumero8.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "8"
    }
    this.teclaNumero9.onclick = function(e){
      self.pantalla.textContent = self.pantalla.textContent + "9"
    }
    // EVENTO CLICK DE LAS IMAGENES - OPERADORES
    this.teclaSuma.onclick = function(e){
      self.operadorA = self.pantalla.textContent
      self.operacion = "+"
      self.limpiarCalculadora()
    }
    this.teclaResta.onclick = function(e){
      self.operadorA = self.pantalla.textContent
      self.operacion = "-"
      self.limpiarCalculadora()
    }
    this.teclaMultiplicar.onclick = function(e){
      self.operadorA = self.pantalla.textContent
      self.operacion = "*"
      self.limpiarCalculadora()
    }
    this.teclaDividido.onclick = function(e){
      self.operadorA = self.pantalla.textContent
      self.operacion = "/"
    }
    // EVENTO CLICK DE LAS IMAGENES OTRAS
    this.teclaOn.onclick= function(e){
      self.resetCalculadora();
    }
    this.teclaIgual.onclick=function(e){
      self.operadorB = self.pantalla.textContent
      self.resolverProblema();
    }

  },
  resetCalculadora: function(){
    this.operadorA = ""
    this.operadorB = ""
    this.resultadoOperacion = ""
    this.pantalla.textContent = "0"
  },
  limpiarCalculadora: function(){
   this.pantalla.textContent = ""
 },
 resolverProblema: function(){
   
 }

}

Calculadora.init();
