class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = self.rear = None

    def enqueue(self, item):
        new_node = Node(item)
        if not self.rear:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if not self.front:
            return None
        value = self.front.value
        self.front = self.front.next
        if not self.front:
            self.rear = None
        return value

# Prueba de la cola
queue = Queue()
for num in [1, 2, 3, 4, 5]:
    queue.enqueue(num)

print(queue.dequeue())  # 1
print(queue.dequeue())  # 2
print(queue.dequeue())  # 3
print(queue.dequeue())  # 4
print(queue.dequeue())  # 5
print(queue.dequeue())  # None (cola vacía)