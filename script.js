//prompt("Introduce tu edad","Edad");
//Utilizo un array para tener las banderas.
let banderas=["https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Peru.png?raw=true","https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Argentina.png?raw=true","https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Brazil.png?raw=true","https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Colombia.png?raw=true","https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Ecuador.png?raw=true","https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Paraguay.png?raw=true","https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Uruguay.png?raw=true","https://github.com/ilanangelesrodriguez/Quiz_flag/blob/main/Images/Venezuela.png?raw=true"];

//array para la opcion correcta
let correcta=[2,2,0,1,0,2,0];

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
