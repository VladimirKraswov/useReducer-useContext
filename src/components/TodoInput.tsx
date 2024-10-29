import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Добавить задачу..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Добавить</button>
    </div>
  );
};

export default TodoInput;