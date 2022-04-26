export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://pastebins-server.herokuapp.com"
    : "http://localhost:4000";
