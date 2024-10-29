import React from 'react';
import { Todo } from '../types';
import { useTodo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodo();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
  };

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.text}
      <button onClick={handleRemove}>Удалить</button>
    </li>
  );
};

export default TodoItem;