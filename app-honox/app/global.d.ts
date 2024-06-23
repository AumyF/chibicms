import {} from "hono";

type Head = {
  title?: string;
  reload?: boolean;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head
    ): Response | Promise<Response>;
  }
}
