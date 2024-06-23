export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold py-4">ChibiCMS (Next.js)</h1>
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
      <h2 className="text-3xl py-4">技術（Next.js）</h2>
      <ul className="list-disc pl-4">
        <li>Next.js 15 RC (App Router)</li>
        <li>React 19 RC</li>
      </ul>
    </main>
  );
}
