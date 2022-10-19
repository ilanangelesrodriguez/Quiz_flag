//prompt("Introduce tu edad","Edad");
//Utilizo un array para tener las banderas.
let banderas=["Peru.png?raw=true","Argentina.png?raw=true","Brazil.png?raw=true","Colombia.png?raw=true","Ecuador.png?raw=true","Paraguay.png?raw=true","Uruguay.png?raw=true","Venezuela.png?raw=true"];

//array para la opcion correcta
let correcta=[2,2,0,1,0,2,0,1];

//array para los paises a mostar
let Opciones=[];

//cargo en el array de opciones, las posibles respuestas
Opciones.push(["Argentina","Brasil","Peru"]);
Opciones.push(["Uruguay","Ecuador","Argentina"]);
Opciones.push(["Brasil","Colombia","Peru"]);
Opciones.push(["Ecuador","Colombia","Brasil"]);
Opciones.push(["Ecuador","Peru","Uruguay"]);
Opciones.push(["Argentina","Peru","Paraguay"]);
Opciones.push(["Uruguay","Brasil","Argentina"]);
Opciones.push(["Brasil","Venezuela","Argentina"]);

//Defino variable para guardar posicion actual
let posActual=0;
//Variable para guardar los aciertos
let cantidadAcertada=0;

function comenzarJuego(){
    posActual=0;
    cantidadAcertada=0;
    //Activar las pantallas
    document.getElementById("pantalla-inicio").style.display="none";
    document.getElementById("pantalla-juego").style.display="block";
    cargarBandera();
}

//ss
//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgflag").src = "https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/" + banderas[posActual];
        document.getElementById("n0").innerHTML = Opciones[posActual][0];
        document.getElementById("n1").innerHTML = Opciones[posActual][1];
        document.getElementById("n2").innerHTML = Opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertada++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertada;
}

function volver(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicio").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
