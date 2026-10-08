
const nombres = [];

const inputNombre = document.getElementById("nombre");
const listaNombres = document.getElementById("listaNombres");
const btnAgregar = document.getElementById("btnAgregar");
const btnLimpiar = document.getElementById("btnLimpiar");

function agregarNombre() {

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    nombres.push(nombre);

    nombres.sort((a, b) =>
        a.localeCompare(b, "es", {
            sensitivity: "base"
        })
    );

    listaNombres.value = nombres.join("\n");

    inputNombre.value = "";

    inputNombre.focus();
}

function limpiarLista() {

    nombres.length = 0;


    listaNombres.value = "";

    inputNombre.value = "";

    inputNombre.focus();
}


btnAgregar.addEventListener("click", agregarNombre);


btnLimpiar.addEventListener("click", limpiarLista);


inputNombre.addEventListener("keydown", function(evento) {

    if (evento.key === "Enter") {
        agregarNombre();
    }

});