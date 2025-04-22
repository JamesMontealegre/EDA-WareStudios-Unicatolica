function encontrarContacto() {
    const textoBusqueda = document.getElementById('nombre').value.trim().toUpperCase();

    if (textoBusqueda === '') {
        mostrarMensaje('Ingrese un nombre para buscar');
        return;
    }

    // Si es una única letra del alfabeto, usar búsqueda por inicial
    if (textoBusqueda.length === 1 && /^[A-Z]$/.test(textoBusqueda)) {
        const coincidencias = buscarPorInicial(textoBusqueda[0]);

        if (coincidencias.length > 0) {
            mostrarContactos(coincidencias);
            verTodos = false;
        } else {
            mostrarMensaje(`No se hallaron contactos que comiencen con '${textoBusqueda}'`);
        }
    } else {
        // Búsqueda general
        const coincidencias = listaContactos.filter(persona =>
            persona.firstName.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
            persona.phone.includes(textoBusqueda)
        );

        if (coincidencias.length > 0) {
            mostrarContactos(coincidencias);
            verTodos = false;
        } else {
            mostrarMensaje('No hay resultados que coincidan con la búsqueda');
        }
    }
}

function buscarPorInicial(letraObjetivo) {
    let nodo = listaContactos.head;
    const encontrados = [];

    while (nodo) {
        const inicialNombre = nodo.firstName[0].toUpperCase();
        const inicialApellido = nodo.lastName ? nodo.lastName[0].toUpperCase() : '';

        if (inicialNombre === letraObjetivo || inicialApellido === letraObjetivo) {
            encontrados.push({
                firstName: nodo.firstName,
                lastName: nodo.lastName || '',
                phone: nodo.phone
            });
        }

        nodo = nodo.next;
    }

    return encontrados;
}