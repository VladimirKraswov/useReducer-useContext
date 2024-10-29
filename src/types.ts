export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type ActionType =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number };

export interface TodoState {
  todos: Todo[];
}