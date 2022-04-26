import { pastesInterface } from "../utils/pastesInterface";

interface SinglePasteElementProps {
  data: pastesInterface;
}

export function SinglePasteElement(
  props: SinglePasteElementProps
): JSX.Element {
  return <section>
      <p>Title: {props.data.title}</p>
      <p>{props.data.text}</p>
      <p>Date Created: {props.data.creationDate}</p>
    </section>
}
