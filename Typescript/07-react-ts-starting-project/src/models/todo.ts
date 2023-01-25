class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = crypto.randomUUID();
  }
}

export default Todo;
