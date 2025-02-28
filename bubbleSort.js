const bubbleSort = (A) => {
    let N = A.length;
    let i  = 0;
    while(i < N-1){
        let j = 0;
        while(j < N-i-1){
            if(A[j].name > A[j+1].name){
                let temp = A[j];
                A[j] = A[j+1];
                A[j+1] = temp;
            }
            j=j+1;
        }
        i = i +1;
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