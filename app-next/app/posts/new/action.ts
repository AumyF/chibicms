"use server";

import { redirect } from "next/navigation";
import * as Queries from "@chibicms/server/db/query_sql";
import { connect } from "@chibicms/server/db/connect";

export type State = { message?: string };

export async function createPost(
  state: State,
  formData: FormData
): Promise<State> {
  const title = formData.get("title");

  if (!title) return { message: "title is empty" };

  const sql = connect();
  const id = crypto.randomUUID();
  try {
    await Queries.createPost(sql, {
      createdAt: new Date(),
      content: "",
      id,
    });
  } catch (e) {
    console.error(e);
    return { message: "server error" };
  }

  redirect(`/posts/${id}/edit`);
}
