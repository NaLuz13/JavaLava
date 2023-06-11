//alert("alo");

function sumar(){
var num1 = document.getElementById("ca1").value;
var num2 = document.getElementById("ca2").value;
var num3 = document.getElementById("ca3").value;
var suma = parseInt(ca1) + parseInt(num2) + parseInt(num3);
alert("la respuesta es: " + suma);
}


const cantidad = document.getElementById('cantidad')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

const aPagar = document.getElementById('aPagar')

//botonCalcular.addEventListener('click',resumen)

function descuento(numero, porcentaje){
return numero - (numero*porcentaje / 100)
}
/**otra var nota1 =
var nota2 = 
suma = nota1 + nota2;
promedio = suma/2;
alert("el resultado es: "+ promedio)
**/

function resumen(){
    console.log(categoria.value)
    console.log(cantidadEntradas.value)
    cantidadEntradas.value
    if(categoria.value == "ca1"){
        aPagar= 
    } else if(categoria.value == "ca2"){

    } else {

    }

function borrar(){
    document.addEventListener('DOMContentLoaded', function(){
        let formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', function() {
          formulario.reset();
        });
      });
    }


    totalCompra.innerHTML = cantidadEntradas.value
}