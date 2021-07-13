//Aplicamos acción al boton de calcular
let operacion = document.getElementById('calcular');
operacion.addEventListener("click", endeudamiento);

//Formula de endeudamiento
function calculo(ingreso,gasto){
    return (ingreso-gasto)*0.4;
}

//Función de calculo de endeudamiento
function endeudamiento(){
    //Almacenamos valores de ingreso y gasto
    const ingreso = document.getElementById("ingresoMensual");
    const ingresoMes= ingreso.value;
    const gasto = document.getElementById("gastosFijos");
    const gastoMes = gasto.value;
    
    //llamo función calculo
    const capacidadDeEndeudamiento = calculo(ingresoMes,gastoMes);

    if(capacidadDeEndeudamiento<=0){
        //Excribo resultado en HTML
        document.getElementById('resultado').innerHTML = "Ni se te ocurra, debes hasta el alma!!!";
    } else {
    //Excribo resultado en HTML
    document.getElementById('resultado').innerHTML = "$" + capacidadDeEndeudamiento;
}
}
