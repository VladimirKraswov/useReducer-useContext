import React, { createContext, useReducer, Dispatch, useContext, ReactNode } from 'react';
import { todoReducer, initialState } from './TodoReducer';
import { TodoState, ActionType } from '../types';

interface TodoContextProps {
  state: TodoState;
  dispatch: Dispatch<ActionType>;
}

interface TodoProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = (): TodoContextProps => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};