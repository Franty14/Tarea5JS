// Verificación de Roles usando if-else y switch
function verificarRol() {
    const role = document.getElementById("role").value.toLowerCase();
    let mensaje;

    if (role === "admin" || role === "user" || role === "guest") {
        switch (role) {
            case "admin":
                mensaje = "Acceso completo concedido.";
                break;
            case "user":
                mensaje = "Acceso limitado concedido.";
                break;
            case "guest":
                mensaje = "Acceso solo para invitados.";
                break;
        }
    } else {
        mensaje = "Rol no reconocido. Acceso denegado.";
    }
    document.getElementById("output-roles").innerText = mensaje;
}

// Operaciones Matemáticas y Fecha
function calcularRaiz() {
    const numero = Number(document.getElementById("numero").value);
    if (!isNaN(numero) && numero >= 0) {
        const raiz = Math.sqrt(numero).toFixed(2);
        document.getElementById("output-math").innerText = `La raíz cuadrada de ${numero} es ${raiz}`;
    } else {
        document.getElementById("output-math").innerText = "Por favor, ingresa un número válido y positivo.";
    }
}

function mostrarFecha() {
    const fecha = new Date();
    const formatoFecha = fecha.toLocaleDateString();
    const formatoHora = fecha.toLocaleTimeString();
    document.getElementById("output-date").innerText = `Fecha y hora actual: ${formatoFecha}, ${formatoHora}`;
}

// Manejo de Errores con try-catch-throw y Objeto Error
function validarEdad() {
    const edad = Number(document.getElementById("edad").value);
    try {
        if (isNaN(edad) || edad < 0) throw new Error("La edad ingresada no es válida.");
        if (edad < 18) throw new Error("Debes tener al menos 18 años para continuar.");
        document.getElementById("output-error").innerText = "Edad válida. Bienvenido.";
    } catch (error) {
        document.getElementById("output-error").innerText = `Error: ${error.message}`;
    }
}

// Uso de Bucles: for, while, do-while
function mostrarLista() {
    const lista = ["Manzana", "Banana", "Cereza", "Durazno"];
    let resultado = "Frutas: ";

    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];
        if (i < lista.length - 1) {
            resultado += ", ";
        }
    }

    // Bucle while para agregar un número
    let j = 0;
    while (j < 2) {
        resultado += ` | Repetición while ${j + 1}`;
        j++;
    }

    // Bucle do-while para otro ejemplo
    let k = 0;
    do {
        resultado += ` | Repetición do-while ${k + 1}`;
        k++;
    } while (k < 1);

    document.getElementById("output-lista").innerText = resultado;
}

// Colecciones y Tipos: Arreglos y Arreglos Tipados
function mostrarDatosTipados() {
    const datos = new Float32Array([3.5, 7.1, 9.6]);
    let resultado = "Datos Tipados: ";

    for (let i = 0; i < datos.length; i++) {
        resultado += datos[i];
        if (i < datos.length - 1) {
            resultado += ", ";
        }
    }

    document.getElementById("output-tipados").innerText = resultado;
}

// Búsqueda en el DOM
function buscarPorID() {
    const elemento = document.getElementById("role");
    if (elemento) {
        document.getElementById("output-dom").innerText = `Elemento encontrado por ID: ${elemento.placeholder}`;
    } else {
        document.getElementById("output-dom").innerText = "No se encontró el elemento.";
    }
}
