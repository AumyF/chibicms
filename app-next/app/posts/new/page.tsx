import { Form } from "./form";

export default async function Page() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1>記事を作成する</h1>
      <Form />
    </main>
  );
}
