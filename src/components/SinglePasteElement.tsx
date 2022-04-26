import { creationDateFormatter } from "../utils/creationDateFormatter";
import { pastesInterface } from "../utils/pastesInterface";
import ShowMoreText from 'react-show-more-text'

interface SinglePasteElementProps {
  data: pastesInterface;
}

export function SinglePasteElement(
  props: SinglePasteElementProps
): JSX.Element {
  return <section className="SinglePasteElement">
    {props.data.title && <p>Title: {props.data.title}</p>}
    <ShowMoreText
      more="Show more"
      less="Show less"
      lines={5}
    >
      <p>{props.data.text}</p>
    </ShowMoreText>
    <p>Date Created: {creationDateFormatter(props.data.creationdate)}</p>
  </section>
}
