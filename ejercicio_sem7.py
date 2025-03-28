class Stack:
    def __init__(self):
        self._items = []  

    def push(self, item):
        """Agrega un elemento a la pila."""
        self._items.append(item)

    def pop(self):
        """Elimina y devuelve el último elemento de la pila."""
        return self._items.pop() if self._items else None

stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

print(stack.pop())  
print(stack.pop())  
print(stack.pop())  
print(stack.pop())  
print(stack.pop())  
print(stack.pop())  