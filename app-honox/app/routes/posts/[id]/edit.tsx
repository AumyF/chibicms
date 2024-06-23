import { connect } from "@chibicms/server/db/connect";
import { createRoute } from "honox/factory";
import * as Queries from "@chibicms/server/db/query_sql";

const Form = ({
  content,
  id,
  message,
}: {
  id: string;
  content: string;
  message: string;
}) => {
  return (
    <turbo-frame id="hoge">
      <form
        action={`/posts/${id}/edit`}
        method="POST"
        className="flex flex-col gap-4"
      >
        <p aria-live="polite">{message}</p>
        <label>
          <span>タイトル</span>
          <input type="text" name="title" />
        </label>
        <label>
          <span>本文</span>
          <textarea name="content" defaultValue={content} />
        </label>
      </form>
    </turbo-frame>
  );
};

export const POST = createRoute(async (c) => {
  const formData = await c.req.formData();
  const title = formData.get("title");
  const content = formData.get("content")?.toString() ?? "";
  const id = c.req.param("id");

  if (!id) {
    return c.render(<main>no id</main>);
  }

  if (!title)
    return c.html(
      <Form id={id} content={content} message="title is empty"></Form>
    );

  const sql = connect();

  try {
    await Queries.updatePost(sql, { id, content });
  } catch (e) {
    console.error(e);
    return c.html(
      <Form id={id} content={content} message="server error"></Form>
    );
  }

  return c.redirect(`/posts/${id}`);
});

export default createRoute(async (c) => {
  const sql = connect();
  const post = await Queries.getPost(sql, { id: c.req.param("id") });

  if (post === null) {
    return c.notFound();
  }

  return c.render(
    <main className="max-w-4xl mx-auto">
      <h1>記事を編集する</h1>

      <Form id={post.id} content={post.content} message="" />
    </main>
  );
});
