def selection_sort(personas): #definimos selection_sort para que reciba el parametro "personas"
    N = len(personas)  # N almacenara la cantidad de personas 
    i = 0  # con este representamos donde iniciara el elemento más pequeño

    while i < N - 1: # este while se ejecuta mientras que i sea menor que 1
        min_index = i  # ya que i es el indice minimo, min_index almacena la posicion más pequeña 
        j = i + 1  #j es el siguiente indice  de la lista que se usara para comparar 

        while j < N: #con este while recorremos los elementos desde j hasta el final, asi encontrando el más pequeño
            if personas[j]["code"] < personas[min_index]["code"]:  #se compara el valor del code, si es menor significa que hay un valor más alto 
                min_index = j 
            j += 1  #se incrementa nuevamente para encontrar un indice menor 

        if min_index != i:  # usamos esto como cambio, si encontramos un numero menor lo intercambiamos 
            personas[i], personas[min_index] = personas[min_index], personas[i] 

        i += 1  #incrementamos i para seguir con el siguiente indice 
personas = [
    {"name": "Camila", "code": 1},
    {"name": "Daniel", "code": 2},
    {"name": "Sofía", "code": 3},
    {"name": "Juan", "code": 4},
    {"name": "Valentina", "code": 5},
    {"name": "Carlos", "code": 6},
    {"name": "Isabella", "code": 7},
    {"name": "Andrés", "code": 8},
    {"name": "Mariana", "code": 9},
    {"name": "Felipe", "code": 10}
]   


selection_sort(personas)


for personas in personas:
    print(personas)