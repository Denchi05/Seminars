import { useState } from "react";
import { TodoItem } from "./TodoItem";

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;

    setTodos((prev) => [...prev, { id: makeId(), text, done: false }]); // добавляем в конец массива
    setInput("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <h2>TodoList</h2>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          placeholder="Введите дело..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button type="button" onClick={addTodo}>
          Добавить
        </button>
      </div>

      <ul style={{ marginTop: 16, display: "grid", gap: 8 }}>
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            text={t.text}
            done={t.done}
            onToggle={() => toggleTodo(t.id)}
            onDelete={() => deleteTodo(t.id)}
          />
        ))}
      </ul>
    </div>
  );
};
