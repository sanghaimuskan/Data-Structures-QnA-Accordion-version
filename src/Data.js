const questions = [
  {
    id: 1,
    title: 'What is Stack and where it can be used? ',
    info:
      'Stack is a linear data structure which the order LIFO(Last In First Out) or FILO(First In Last Out) for accessing elements. Basic operations of the stack are: Push, Pop, Peek.',
  },
  {
    id: 2,
    title: 'Which data structures are used for BFS and DFS of a graph? ',
    info:
      'Queue is used for BFS and Stack is used for DFS. DFS can also be implemented using recursion (Note that recursion also uses function call stack).',
  },
  {
    id: 3,
    title: 'Can doubly linked be implemented using a single pointer variable in every node? ',
    info:
      'Doubly linked list can be implemented using a single pointer.',
  },
  {
    id: 4,
    title: 'How to check if a given Binary Tree is BST or not? ',
    info:
      'If inorder traversal of a binary tree is sorted, then the binary tree is BST. The idea is to simply do inorder traversal and while traversing keep track of previous key value. If current key value is greater, then continue, else return false.',
  },
  {
    id: 5,
    title: 'What are linear and non-linear data Structures? ',
    info:
      'Linear: A data structure is said to be linear if its elements form a sequence or a linear list. Examples: Array. Linked List, Stacks and Queues and Non-Linear: A data structure is said to be non-linear if the traversal of nodes is nonlinear in nature. Example: Graph and Trees.',
  },
]
export default questions