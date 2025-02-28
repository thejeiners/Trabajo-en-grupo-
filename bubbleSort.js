const bubbleSort = (A) => {//se crea una funcion que requiere un argumente, un arreglo
    let N = A.length;// se crea la variable N y se inicializa con el tamaño del arreglo
    let i  = 0;// se crea yt se inicializa la variable i con cero
    while(i < N-1){//se ejecutará el codigo de cero a la posición anterior al tamaño del arreglo
        let j = 0;//crea e inicializa la variable j en 0
        while(j < N-i-1){// mientras j sea menor a al tamaño del arreglo menos la posicion i, menos 1
            if(A[j].name > A[j+1].name){//compara el nombre de la posicion inicial, con la siguiente si es mayor
                let temp = A[j];// en la posicion inicial asigna el valor de la posicion J
                A[j] = A[j+1];// actualiza el valor de la posicion j al de la posicion sigueinte
                A[j+1] = temp;// actualiza el valor de la poscion siguiente al valor de temporal
            }
            j=j+1;// incrementa jota en uno
        }
        i = i +1;//incrementa i en uno
    }
    return A;
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

console.log(bubbleSort(B))