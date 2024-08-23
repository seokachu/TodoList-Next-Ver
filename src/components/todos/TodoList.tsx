import { getTodos } from "@/api/todos";
import { InputForm } from "@/types";
import { useQuery } from "@tanstack/react-query";
import TodoItems from "./TodoItems";
import S from "@/styles/todos.module.scss";
import Loading from "@/utils/Loading";
import NotFoundPage from "@/app/not-found";

const TodoList = () => {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (query.isError) {
    return <NotFoundPage />;
  }

  if (query.isLoading) {
    return <Loading />;
  }

  //query.data가 inputForm[] 배열이라는 것을 typescript에게 알려줌.
  const todos = query.data as InputForm[];

  const workingTodos = todos.filter((item) => !item.isDone);
  const doneTodos = todos.filter((item) => item.isDone);

  const renderTodoItems = (
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

  return (
    <>
      {renderTodoItems("✍️ WORKING", workingTodos, "작성한 내용이 없습니다.")}
      {renderTodoItems("🌟 DONE", doneTodos, "완료한 일이 없습니다.")}
    </>
  );
};

export default TodoList;
