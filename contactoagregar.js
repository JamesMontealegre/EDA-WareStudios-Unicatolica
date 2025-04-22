// ContactManager.js

// Lista global de contactos
const listaContactos = [];
let verTodos = false;

// Función principal para añadir un contacto
function añadirContacto() {
    const inputNombre = document.getElementById('nombre').value.trim();
    const inputTelefono = document.getElementById('telefono').value.trim();

    if (inputNombre !== '' && inputTelefono !== '') {
        listaContactos.push({ nombre: inputNombre, telefono: inputTelefono });
        document.getElementById('nombre').value = '';
        document.getElementById('telefono').value = '';
        mostrarMensaje('Contacto guardado con éxito');
        verTodos = false;
    } else {
        mostrarMensaje('Debe completar ambos campos');
    }
}

// Función para insertar ordenadamente según la primera letra del nombre
function insertarPorInicial(nodoNuevo) {
    if (listaContactos.head == null) {
        listaContactos.head = nodoNuevo;
        listaContactos.tail = nodoNuevo;
        nodoNuevo.next = null;
        nodoNuevo.previous = null;
    } else {
        let nodoActual = listaContactos.head;

        while (nodoActual && nodoActual.firstName[0] < nodoNuevo.firstName[0]) {
            nodoActual = nodoActual.next;
        }

        if (!nodoActual) {
            // Insertar al final
            listaContactos.tail.next = nodoNuevo;
            nodoNuevo.previous = listaContactos.tail;
            nodoNuevo.next = null;
            listaContactos.tail = nodoNuevo;
        } else if (nodoActual === listaContactos.head) {
            // Insertar al inicio
            nodoNuevo.next = listaContactos.head;
            listaContactos.head.previous = nodoNuevo;
            nodoNuevo.previous = null;
            listaContactos.head = nodoNuevo;
        } else {
            // Insertar en medio
            let nodoPrevio = nodoActual.previous;
            nodoPrevio.next = nodoNuevo;
            nodoNuevo.previous = nodoPrevio;
            nodoNuevo.next = nodoActual;
            nodoActual.previous = nodoNuevo;
        }
    }
}

// Estructura para la lista doblemente enlazada
class ListaDoblementeEnlazada {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
