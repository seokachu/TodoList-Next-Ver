import { deleteTodos, updateTodos } from "@/api/todos";
import { TodoItemProps } from "@/types";
import { getFormattedDate } from "@/utils/data";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import S from "@/styles/todos.module.scss";

const TodoItems = ({ todo }: TodoItemProps) => {
  const { id, title, contents, createAt, isDone, color } = todo;
  const queryClient = useQueryClient();

  //삭제
  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id: string) => deleteTodos(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  //완료
  const { mutate: editMutate } = useMutation({
    mutationFn: async (id: string) => {
      await updateTodos(id, {
        id,
        title,
        contents,
        createAt,
        isDone: !isDone,
        color,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  //삭제 버튼
  const onClickDeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteMutate(id);
      toast.success("삭제가 완료 되었습니다.");
    } else {
      toast("삭제가 취소 되었습니다.", {
        icon: "✏️",
      });
    }
  };

  //완료 버튼
  const onClickToggleHandler = () => {
    editMutate(id);
  };

  return (
    <li key={todo.id} style={{ backgroundColor: color }}>
      <div className={S.todoListContent}>
        <h3 className={S.title}>{title}</h3>
        <p>{contents}</p>
      </div>
      <div className={S.dateAndButton}>
        <time>{getFormattedDate(createAt)}</time>
        <div>
          <button onClick={onClickDeleteHandler}>삭제</button>
          <button onClick={onClickToggleHandler}>
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItems;
