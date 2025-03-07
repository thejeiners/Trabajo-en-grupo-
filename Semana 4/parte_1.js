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



// Heap Sort
const heapSort = (arr, key) => {
    let heap = [...arr];
    buildHeap(heap, key);
    for (let i = heap.length - 1; i > 0; i--) {
        [heap[0], heap[i]] = [heap[i], heap[0]];
        heapify(heap, i, 0, key);
    }
    return heap;
}

const buildHeap = (arr, key) => {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i, key);
    }
}

const heapify = (arr, n, i, key) => {
    let largest = i;
    let left = 2 * i + 1, right = 2 * i + 2;
    if (left < n && arr[left][key] > arr[largest][key]) largest = left;
    if (right < n && arr[right][key] > arr[largest][key]) largest = right;
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest, key);
    }
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
    console.log("1. Ordenar por edad (Heap Sort)");
    console.log("4. Buscar por edad");
    console.log("0. Salir");
}

const procesarOpcion = (opcion) => {
    let ordenado = [];
    switch (opcion) {
        case "1":
            ordenado = heapSort(empleados, "edad");
            console.log("Empleados ordenados por edad:", ordenado);
            break;
        case "4":
            rl.question("Ingresa la edad a buscar: ", (edadInput) => {
                let edad = parseInt(edadInput, 10);
                if (!isNaN(edad)) {
                    let empleadosPorEdad = mergeSort(empleados, "edad");
                    let encontradoEdad = busquedaBinaria(empleadosPorEdad, "edad", edad);
                    console.log(encontradoEdad ? encontradoEdad : "No encontrado.");
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