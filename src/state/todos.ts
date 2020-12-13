import { makeAutoObservable } from 'mobx'

interface ITodo {
  title: string
  id: number
  completed: boolean
}

interface IState {
  todos: Array<ITodo>
  filteredTodos: Array<ITodo>
}

class Todos {
  state: IState = {
    todos: [],
    filteredTodos: [],
  }

  constructor() {
    makeAutoObservable(this)
  }

  create(title: string) {
    const id = Date.now()

    this.state.todos.push({ id, title, completed: false })
    this.state.filteredTodos = this.state.todos
  }

  remove(id: number) {
    this.state.filteredTodos = this.state.todos = this.state.todos.filter(
      todo => todo.id !== id,
    )
  }

  toggleCompleted(id: number) {
    this.state.filteredTodos = this.state.todos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
  }

  filterByCompleted() {
    this.state.filteredTodos = this.state.todos.filter(todo => todo.completed)
  }

  filterByAll() {
    this.state.filteredTodos = this.state.todos
  }

  clearCompleted() {
    this.state.filteredTodos = this.state.todos = this.state.todos.filter(
      todo => !todo.completed,
    )
  }
}

export const todosStore = new Todos()
