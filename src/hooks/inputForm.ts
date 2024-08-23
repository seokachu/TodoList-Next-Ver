import { InputForm } from "@/types";
import { ChangeEvent, useState } from "react";

export const FormValue = (initialState: InputForm) => {
  const [formState, setFormState] = useState<InputForm>(initialState);
  const [errors, setErrors] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (e.target.value !== "") {
      setErrors("");
    }
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return {
    formState,
    errors,
    onChangeHandler,
    resetForm,
    setErrors,
  };
};
