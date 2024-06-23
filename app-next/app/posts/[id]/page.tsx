import * as Queries from "@chibicms/server/db/query_sql";
import { connect } from "@chibicms/server/db/connect";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const sql = connect();
  let post;
  try {
    post = await Queries.getPost(sql, { id: params.id });
  } catch (e) {
    console.error(e);
    notFound();
  }

  if (post === null) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto">
      <h1>{post.id}</h1>
      <p>{post.createdAt.toISOString()}</p>
      <p>{post.content}</p>
      <a href={`/posts/${post.id}/edit`}>編集</a>
    </main>
  );
}
