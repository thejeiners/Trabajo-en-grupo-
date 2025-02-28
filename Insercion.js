const insertionSort = (A) => {//drclaro la funcion y el argumento de entrada
    let N = A.length;//declaro una variable N que va tener el tamaño del arreglo
    let i = 1;// declaro la variable i que es la inicializadora con el valor de 1

    while (i < N) {//con el while itero hasta elnumero anterior del tamaño del arreglo
        let current = A[i];// le asigo a la variable current el valor del elemento de la posición 2
        let j = i - 1;//creo e inicializó la variable j en 0 es decir la primera posición

        while (j >= 0 && A[j].name > current.name) {// valido que mi variable cero sea igual o mayor a cero o la posición inicial y comparo el contenido de cada posición
            A[j + 1] = A[j];//asigna en la siguiente posición  el valor de la pocisión j
            j = j - 1;// decrementa en uno el valor de la variable j
        }

        A[j + 1] = current;//asigna el valor de current el valor del siguiente valor de j
        i = i + 1;// incrementa el valor de en 1 cuando sale del while interno
    }

    return A;// retorna el valor del arreglo A
}


let B =[
    {"name": "Camila","code":1},
    {"name": "Daniel","code":2},
    {"name": "Sofía","code":3},
    {"name": "Juan","code":4},
    {"name": "Valentina","code":5},
    {"name": "Carlos","code":6},
    {"name": "Isabella","code":7},
    {"name": "Andrés","code":8},
    {"name": "Mariana","code":9},
    {"name": "Felipe","code":10}
]

console.log(insertionSort(B))