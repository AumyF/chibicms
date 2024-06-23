import { Form } from "./form";
import * as Queries from "@chibicms/server/db/query_sql";
import { connect } from "@chibicms/server/db/connect";
import { redirect, notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const sql = connect();
  const post = await Queries.getPost(sql, { id: params.id });

  if (post === null) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto">
      <h1>記事を編集する</h1>
      <Form post={post} />
    </main>
  );
}
