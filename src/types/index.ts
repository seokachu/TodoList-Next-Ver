export interface InputForm {
  id: string;
  title: string;
  contents: string;
  createAt: Date;
  color: string;
  isDone: boolean;
}

export interface TodoItemProps {
  todo: InputForm;
}
