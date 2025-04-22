// Mostrar la lista completa de contactos
function desplegarContactos() {
    if (listaContactos.length === 0) {
        mostrarMensaje('No hay contactos disponibles');
        return;
    }

    for (const persona of listaContactos) {
        console.log(persona);
    }

    verTodos = true;
}
