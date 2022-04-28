import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { creationDateFormatter } from "../utils/creationDateFormatter";
import { commentInterface } from "./ExistingComments";

interface SinglCommentElementProps {
  data: commentInterface;
  changeToggle: (arg: boolean) => void;
  toggle: boolean;
}

export function SingleCommentElement(
  props: SinglCommentElementProps
): JSX.Element {
  function handleDeleteComment() {
    axios.delete(baseUrl + `/pastes/comments/${props.data.id}`);
    props.changeToggle(!props.toggle);
  }

  return (
    <section className="comment-grid">
      <div className="comment--buttons-container">
        <button className="comment--button" onClick={handleDeleteComment}>
          🗑️
        </button>
      </div>
      <div className="comment-container">
        <p>{props.data.comment}</p>
        <em className="date-font">
          {creationDateFormatter(props.data.creationdate)}
        </em>
      </div>
    </section>
  );
}
