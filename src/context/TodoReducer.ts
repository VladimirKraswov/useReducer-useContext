import { TodoState, ActionType } from '../types';

export const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state: TodoState, action: ActionType): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { todos: [...state.todos, newTodo] };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}