import { creationDateFormatter } from "../utils/creationDateFormatter";
import { pastesInterface } from "../utils/pastesInterface";
import ShowMoreText from "react-show-more-text";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

interface SinglePasteElementProps {
  data: pastesInterface,
  changeToggle: (arg: boolean) => void,
  toggle: boolean
}

export function SinglePasteElement(
  props: SinglePasteElementProps
): JSX.Element {

  async function deletePaste(id: number) {
    await axios.delete(baseUrl + `/pastes/${id}`)
    props.changeToggle(!props.toggle)
  }
  return (
    <section className="SinglePasteElement">
      {props.data.title && <p className="PasteTitle">{props.data.title}</p>}
      <ShowMoreText more="Show more" less="Show less" lines={3}>
        <p>{props.data.text}</p>
      </ShowMoreText>
      <p>Date Created: {creationDateFormatter(props.data.creationdate)}</p>
      <button
        onClick={() => deletePaste(props.data.id)}
      >Delete</button>
    </section>
  );
}
