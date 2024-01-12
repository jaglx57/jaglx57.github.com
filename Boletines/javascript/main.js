/*
console.log("Hola mundo desde JavaScript")

//Dom
//criterios de busqueda
//querySelector solo busca un elemento
//querySelectorAll Busca todos los elementos que concuerden con la etiqueta
let container = document.querySelector(".container");
let table = document.querySelectorAll("a"); 

table.forEach(function(table){
    console.log(table);
}); */


/*Funciona para navegar entre los elementos y obtener los datos de la tabla en la consola
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){

    td.addEventListener('click',function(){
        console.log(this);
    })
});*/
/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star"); //sirve para agregar clases a las etiquetas que desees
});*/


//Obtener los elementos de la clase close
let links = document.querySelectorAll(".close");
//recorrido
links.forEach(function(link){
    link.addEventListener('click', function(evento){
        evento.preventDefault();
        let content = document.querySelector(".content");

        //quitar las clases de animacion que tiene
        content.classList.remove("animate__animated");
        content.classList.remove("animate__bounceInDown");

        //Agregar de nuevo la clase de animacion que se desea
        content.classList.add("animate__animated");
        content.classList.add("animate__bounceOutUp");

        //Funciona para darle un tiempo a la animacion y procesamiento de la accion
        setTimeout(function(){
            //Para redireccionar de pagina 
            location.href="/Boletines/Index.html";
        },600);
        return false;
    })
});
