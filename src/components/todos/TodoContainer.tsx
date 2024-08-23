"use client";

import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import S from "@/styles/common.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function TodoContainer() {
  const queryClient = new QueryClient();

  return (
    <div className={S.layout}>
      <QueryClientProvider client={queryClient}>
        <TodoForm />
        <TodoList />
      </QueryClientProvider>
    </div>
  );
}
