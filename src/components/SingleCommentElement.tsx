import { creationDateFormatter } from "../utils/creationDateFormatter";
import { commentInterface } from "./ExistingComments";

interface SinglCommentElementProps {
  data: commentInterface;
}

export function SingleCommentElement(
  props: SinglCommentElementProps
): JSX.Element {
  return (
    <section>
      <p>{props.data.comment}</p>
      <em>{creationDateFormatter(props.data.creationdate)}</em>
      <hr />
    </section>
  );
}
