const ticket = 200;
let descuentoEstudiante, descuentTrainee, descuentoJunior;

descuentoEstudiante = 0.80;
descuentoTrainee = 0.50;
descuentoJunior = 0.15;

let formulario,nombre,apellido,correo,cantidad,categoria,total_p,botonBorrar,botonResumen;

formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidadEntrada');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
botonResumen = document.querySelector('#resumen');
botonBorrar = document.querySelector('#borrar');


function calcularPago() {
    let total = cantidad.value * ticket;
    switch (categoria.value){
        case "estudiante": 
        total = total - (total * descuentoEstudiante)
        break;

        case "trainee":
            total = total - (total * descuentoTrainee)
            break;

        case "junior":
            total = total - (total * descuentoJunior)
            break;
    }

total_p.innerHTML = `total a pagar: $ ${total}`;

}

botonResumen.addEventListener('click', (event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();
})


botonBorrar.addEventListener('click', () => formulario.reset());

function comprobacion(){
nombre = document.querySelector('input[placeholder="firstName"]').value;
apellido = document.querySelector('input[placeholder="lastName"]').value;
correo = document.querySelector('input[placeholder="email"]').value;

if(nombre== '' && apellido== '' && correo== ''){
    alert ('Campos obligatorios');
    return
}
else if(nombre== ''){
    alert ('Campo obligatorio');
    return
}
else if(apellido== '' || cantidad.value == '0'){
    alert ('Campo obligatorio');
    return
}
else if(correo== ''){
    alert ('Campo obligatorio');
    return
}
else if(cantidad.value== ''){
    alert ('Campo obligatorio');
    return
}
}














































/*
const cantidadEntradas = document.querySelector('cantidadEntrada')

const botonCalcular = document.querySelector('botonCalcular')

const categoria = document.querySelector('inputState')

const aPagar = document.querySelector('aPagar')

const valorFinal = 0;

const ticket = 200;

botonCalcular.addEventListener('click',resumen)

function descuento(numero, porcentaje){
return numero - (numero*porcentaje / 100)
}


function resumen(){
    console.log(cantidadEntradas.value)
    if(categoria.value == "ca1"){
        aPagar= ticket.value * 0.80;
       return valorFinal= aPagar * cantidadEntradas.value;

    } else if(categoria.value == "ca2"){
        aPagar= ticket.value * 0.50
    } else if(categoria.value == "ca3"){
        aPagar= ticket.value * 0.15
    } else {
        ticket.value;
    }
}
function borrar(){
    document.addEventListener('DOMContentLoaded', function(){
        let formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', function() {
          formulario.reset();
        });
      });
    }


totalCompra.innerHTML = cantidadEntradas.value*/
