const readline = require('readline');

const empleados = [
    {"nombre": "Carlos", "edad": 29, "salario": 3000},
    {"nombre": "Ana", "edad": 25, "salario": 3500},
    {"nombre": "Luis", "edad": 32, "salario": 4000},
    {"nombre": "Marta", "edad": 28, "salario": 3200},
    {"nombre": "Pedro", "edad": 35, "salario": 4200},
    {"nombre": "Elena", "edad": 27, "salario": 2800},
    {"nombre": "Sofía", "edad": 30, "salario": 3100},
    {"nombre": "Javier", "edad": 26, "salario": 3300}
];

// Merge Sort
const mergeSort = (arr, key) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), key);
    let right = mergeSort(arr.slice(mid), key);
    return merge(left, right, key);
}

const merge = (left, right, key) => {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i][key] < right[j][key]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


// Búsqueda binaria
const busquedaBinaria = (arr, key, value) => {
    let izquierda = 0, derecha = arr.length - 1;
    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);
        if (arr[medio][key] === value) return arr[medio];
        else if (arr[medio][key] < value) izquierda = medio + 1;
        else derecha = medio - 1;
    }
    return null;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log("Hola, bienvenido a mi aplicación Empresarial. ¿Qué quieres hacer?");
    console.log("5. Buscar por salario");
    console.log("0. Salir");
}

const procesarOpcion = (opcion) => {
    let ordenado = [];
    switch (opcion) {

        case "5":
            rl.question("Ingresa el salario a buscar: ", (salarioInput) => {
                let salario = parseInt(salarioInput, 10);
                if (!isNaN(salario)) {
                    let empleadosPorSalario = mergeSort(empleados, "salario");
                    let encontradoSalario = busquedaBinaria(empleadosPorSalario, "salario", salario);
                    console.log(encontradoSalario ? encontradoSalario : "No encontrado.");
                } else {
                    console.log("Entrada no válida, por favor ingresa un número.");
                }
                menu();  // Volver a mostrar el menú después de buscar
            });
            return;
        case "0":
            console.log("Saliendo del programa...");
            rl.close();
            return;
        default:
            console.log("Usted ha seleccionado una opción incorrecta, intente nuevamente");
    }
    menu();  // Volver a mostrar el menú después de procesar la opción
}

// Menú interactivo en la consola
const menu = () => {
    mostrarMenu();
    rl.question("Elige una opción (0-5): ", (opcion) => {
        procesarOpcion(opcion.trim());
    });
}

// Ejecutar menú
menu();
