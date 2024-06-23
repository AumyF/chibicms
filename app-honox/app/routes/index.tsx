import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <main className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold py-4">ChibiCMS (Hono)</h1>
      <p>
        ChibiCMSは趣味で作られたCMSです。Next.jsとHono/Turboの比較を目的としています。
      </p>
      <h2 className="text-3xl py-4">技術（共通）</h2>
      <ul className="list-disc pl-4">
        <li>Tailwind CSS v4 RC (Oxide)</li>
        <li>sqlc (sqlc-gen-typescript)</li>
        <li>sqldef</li>
        <li>PostgreSQL</li>
      </ul>
      <h2 className="text-3xl py-4">技術（Hono）</h2>
      <ul className="list-disc pl-4">
        <li>Hono</li>
        <li>Turbo</li>
      </ul>
    </main>,
    { title: "ChibiCMS (Hono)" }
  );
});
