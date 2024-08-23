import { getTodos } from "@/api/todos";
import { InputForm } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/utils/Loading";
import NotFoundPage from "@/app/not-found";
import { renderTodoItems } from "@/utils/renderItem";

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

  console.log(todos);

  return (
    <>
      {renderTodoItems("✍️ WORKING", workingTodos, "작성한 내용이 없습니다.")}
      {renderTodoItems("🌟 DONE", doneTodos, "완료한 일이 없습니다.")}
    </>
  );
};

export default TodoList;
