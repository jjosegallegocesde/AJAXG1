//el boton que va a desencadenar el consumo del servicio web
let botonServicio = document.getElementById("boton");

//quiero escuchar cuando el usuario haga clic en el boton 
botonServicio.addEventListener('click', consumirServicio);

//funcion para consumir el servicio web
function consumirServicio() {

    //URL DEL SERVICIO
    let url = "https://jsonplaceholder.typicode.com/users";

    let objetoAJAX = new XMLHttpRequest();

    //se abre la conexión
    objetoAJAX.open('GET', url, true);

    //se espera la carga del servicio
    objetoAJAX.onload = function() {

        let objeto1 = {
            nombre: "juan",
            edad: 30
        }

        let objeto2 = {
            nombre: "juanes",
            edad: 31
        }

        let arreglo = Array(objeto1, objeto2);

        console.log((arreglo[0]));

        console.log((JSON.parse(this.responseText)));


    }

    //enviar la conexion
    objetoAJAX.send();


}