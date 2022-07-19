


alert("A continuacion se le pediran 4 notas para calcular su promedio, si el promedio esta arriba de 3.0 pasas, si sacas de 2.9 para abajo repruebas");

function calcularPromedio (){
    let primerNumero = parseInt(prompt("ingrese el primero numero"));
    let segundoNumero = parseInt(prompt("ingrese el segundo numero"));
    let tercerNumero = parseInt(prompt("ingrese el tercer numero"));
    let cuartoNumero = parseInt(prompt("ingrese el cuarto numero"));
    let resultado = (primerNumero + segundoNumero + tercerNumero + cuartoNumero)/4;
    alert(resultado);
    if (resultado >= 30){
        alert("Re crack, aprobaste");
    }
    else{(resultado <= 29)
        alert("f manito reprobaste");
    }
}

calcularPromedio()

