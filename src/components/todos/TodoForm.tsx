import React, { FormEvent, useId, useState } from "react";
import S from "@/styles/todos.module.scss";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodos } from "@/api/todos";
import { randomCardColor } from "@/utils/color";

const TodoForm = () => {
  const id = useId();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  //NOTE - error
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const mutation = useMutation({
    mutationFn: addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value != "") {
      setTitleError("");
    }
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
    if (e.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError("제목을 입력해 주세요.");
    }

    if (!contents.trim()) {
      setContentsError("내용을 입력해 주세요.");
    }

    //NOTE - form validation
    if (title && contents) {
      const date = new Date();
      const newTodos = {
        id: crypto.randomUUID(),
        title,
        contents,
        createAt: date,
        color: randomCardColor(),
        isDone: false,
      };
      mutation.mutate(newTodos);
      setContents("");
      setTitle("");
      toast.success("등록 되었습니다.");
    }
  };

  return (
    <>
      <form className={S.form} onSubmit={onClickSubmitHandler}>
        <div className={S.formTitle}>
          <label htmlFor={id + "-title"}>제목</label>
          <input
            type="text"
            id={id + "-title"}
            placeholder="제목을 입력해 주세요."
            autoFocus
            aria-describedby={id + "-title-desc"}
            value={title}
            onChange={onChangeTitle}
          />
          <p id={id + "-title-desc"} className={S.error}>
            {titleError}
          </p>
        </div>
        <div className={S.formContent}>
          <label htmlFor={id + "-content"}>내용</label>
          <input
            type="text"
            id={id + "-content"}
            placeholder="내용을 입력해 주세요."
            aria-describedby={id + "-content-desc"}
            value={contents}
            onChange={onChangeContent}
          />
          <p id={id + "-content-desc"} className={S.error}>
            {contentsError}
          </p>
        </div>
        <button type="submit">등록하기</button>
      </form>
    </>
  );
};

export default TodoForm;
