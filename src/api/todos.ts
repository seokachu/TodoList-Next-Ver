import { InputForm } from "@/types";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const todoClient = async (
  endpoint: string,
  method: string,
  body?: InputForm
) => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`${SERVER_URL}${endpoint}`, options);

  const data = await res.json();
  return data;
};

//데이터 불러오기
export const getTodos = async () => {
  const data = await todoClient("/todos", "GET");
  return data;
};

//데이터 추가하기
export const addTodos = async (todos: InputForm) => {
  const data = await todoClient("/todos", "POST", todos);
  return data;
};

//데이터 삭제하기
export const deleteTodos = async (id: string) => {
  const data = await todoClient(`/todos/${id}`, "DELETE");
  return data;
};

//데이터 수정하기
export const updateTodos = async (id: string, todos: InputForm) => {
  const data = await todoClient(`/todos/${id}`, "PUT", todos);
  return data;
};
