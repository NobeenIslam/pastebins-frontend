import { creationDateFormatter } from "./creationDateFormatter";

test("Format the date", () => {
  expect(creationDateFormatter("2022-04-25T12:30:38.446Z")).toBe(
    "2022-04-25 (12:30:38)"
  );
});
