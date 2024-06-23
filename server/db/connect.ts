import postgres from "postgres";

export const connect = () =>
  postgres({
    username: "postgres",
    password: "sparkling-kangaroo",
    database: "postgres",
  });
