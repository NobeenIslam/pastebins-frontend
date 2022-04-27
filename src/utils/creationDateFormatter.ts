export function creationDateFormatter(creationDate: string): string {
  const splitDateTime = creationDate.split("T");
  const date = splitDateTime[0];
  const time = splitDateTime[1].slice(0, 8);
  return `${date} (${time})`;
}

console.log(creationDateFormatter("2022-04-25T12:30:38.446Z"));
