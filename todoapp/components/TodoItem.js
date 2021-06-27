import todoItemStyle from "../styles/TodoItem.module.css";

export default function TodoItem({ todo }) {
  return (
    <div className={todoItemStyle.item}>
      <p>⚫️ {todo.title}</p>
      <p>{todo.completed ? "✅" : "⛔️"}</p>
    </div>
  );
}
