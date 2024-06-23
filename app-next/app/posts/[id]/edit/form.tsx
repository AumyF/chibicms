"use client";

import { useFormState } from "react-dom";
import { updatePost } from "./action";

export function Form({ post }: { post: Parameters<typeof updatePost>[0] }) {
  const updatePost2 = updatePost.bind(null, post);
  const [state, formAction] = useFormState(updatePost2, {});

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <p aria-live="polite">{state.message}</p>
      <label>
        <span>タイトル</span>
        <input type="text" name="title" />
      </label>
      <label>
        <span>本文</span>
        <textarea name="content" defaultValue={post.content} />
      </label>
    </form>
  );
}
