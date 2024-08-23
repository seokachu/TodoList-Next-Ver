import TodoItems from "@/components/todos/TodoItems";
import S from "@/styles/todos.module.scss";
import { InputForm } from "@/types";

export const renderTodoItems = (
  title: string,
  items: InputForm[],
  isEmptyMessage: string
) => {
  return (
    <section className={S.todoListWrapper}>
      <h2 className={S.h2}>{title}</h2>
      <ul className={S.todoList}>
        {items.length > 0 ? (
          items.map((todo) => <TodoItems key={todo.id} todo={todo} />)
        ) : (
          <p>{isEmptyMessage}</p>
        )}
      </ul>
    </section>
  );
};
