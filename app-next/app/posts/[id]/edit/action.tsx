"use server";

import { redirect } from "next/navigation";
import * as Queries from "@chibicms/server/db/query_sql";
import { connect } from "@chibicms/server/db/connect";

export type State = { message?: string };

export async function updatePost(
  post: { content: string; createdAt: Date; id: string },
  state: State,
  formData: FormData
): Promise<State> {
  const title = formData.get("title");

  if (!title) return { message: "title is empty" };

  const content = formData.get("content")?.toString() ?? "";

  const sql = connect();
  try {
    await Queries.updatePost(sql, { ...post, content });
  } catch (e) {
    console.error(e);
    return { message: "server error" };
  }

  redirect(`/posts/${post.id}`);
}
