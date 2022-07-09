alert ("Bienvenido!!")
alert ("A continuacion se le solicitara un numero y se le solicitara otro numero que se le sumara al primer numero y el resultado sera mostrado en cada repeticion que se haga");
let salida =1
let contador=0
let numeroAIngresar = parseInt(prompt ("Por favor ingrese el primer numero"));
contador+=numeroAIngresar
while(salida !=0){
    numeroAIngresar = parseInt(prompt ("Por favor ingrese el siguiente numero"));
    contador+=numeroAIngresar
    alert ("La suma de los numeros es:"+contador)
    if(numeroAIngresar==0){
        salida=0
    }
}
