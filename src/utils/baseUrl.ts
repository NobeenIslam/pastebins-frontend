export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://pastebins-server.herokuapp.com"
    : "https://localhost:4000";
