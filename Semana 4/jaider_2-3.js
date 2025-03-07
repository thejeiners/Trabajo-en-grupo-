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

// Quick Sort
const quickSort = (arr, key) => {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = arr.filter(e => e[key] < pivot[key]);
    let right = arr.filter(e => e[key] > pivot[key]);
    let middle = arr.filter(e => e[key] === pivot[key]);
    return quickSort(left, key).concat(middle, quickSort(right, key));
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

    console.log("2. Ordenar por nombre (Quick Sort)");
    console.log("3. Ordenar por salario (Merge Sort)");
  
    console.log("0. Salir");
}

const procesarOpcion = (opcion) => {
    let ordenado = [];
    switch (opcion) {
        case "2":
            ordenado = quickSort(empleados, "nombre");
            console.log("Empleados ordenados por nombre:", ordenado);
            break;
        case "3":
            ordenado = mergeSort(empleados, "salario");
            console.log("Empleados ordenados por salario:", ordenado);
            break;

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