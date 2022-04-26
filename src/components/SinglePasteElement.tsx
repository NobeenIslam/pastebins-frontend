import { creationDateFormatter } from "../utils/creationDateFormatter";
import { pastesInterface } from "../utils/pastesInterface";

interface SinglePasteElementProps {
  data: pastesInterface;
}

export function SinglePasteElement(
  props: SinglePasteElementProps
): JSX.Element {
  return <section>
    {props.data.title && <p>Title: {props.data.title}</p>}
    <p>{props.data.text}</p>
    <p>Date Created: {creationDateFormatter(props.data.creationdate)}</p>
  </section>
}
