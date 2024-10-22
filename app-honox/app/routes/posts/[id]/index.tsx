import { createRoute } from "honox/factory";
import * as Queries from "@chibicms/server/db/query_sql";
import { connect } from "@chibicms/server/db/connect";
import * as djot from "@djot/djot";
import sanitize from "sanitize-html";

export default createRoute(async (c) => {
  const sql = connect();
  let post;
  try {
    post = await Queries.getPost(sql, { id: c.req.param("id") });
  } catch (e) {
    console.error(e);

    return c.notFound();
  }

  if (post === null) {
    return c.notFound();
  }

  const html = sanitize(djot.renderHTML(djot.parse(post.content)));

  return c.render(
    <main className="max-w-4xl mx-auto">
      <h1>{post.id}</h1>
      <turbo-frame id="hoge">
        <p>{post.createdAt.toISOString()}</p>
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
        <a href={`/posts/${post.id}/edit`}>編集</a>
      </turbo-frame>
    </main>
  );
});
