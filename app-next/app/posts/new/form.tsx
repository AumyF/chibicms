"use client";

import { useFormState } from "react-dom";
import { createPost } from "./action";

export function Form() {
  const [state, formAction] = useFormState(createPost, {});

  return (
    <form action={formAction}>
      <p aria-live="polite">{state.message}</p>
      <label>
        <span>タイトル</span>
        <input type="text" name="title" />
      </label>
    </form>
  );
}
