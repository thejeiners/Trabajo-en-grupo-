class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None  

    def push(self, item):
        new_node = Node(item)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if self.top is None:
            return None  
        popped_value = self.top.value
        self.top = self.top.next
        return popped_value
    
    

    

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