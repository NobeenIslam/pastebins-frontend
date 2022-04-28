import { creationDateFormatter } from "../utils/creationDateFormatter";
import { pastesInterface } from "../utils/pastesInterface";
import ShowMoreText from "react-show-more-text";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { EditPasteForm } from "./EditPasteForm";
import { useState } from "react";
import { Comments } from "./Comments";

interface SinglePasteElementProps {
  data: pastesInterface;
  changeToggle: (arg: boolean) => void;
  toggle: boolean;
}

export function SinglePasteElement(
  props: SinglePasteElementProps
): JSX.Element {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [toggleComments, setToggleComments] = useState<boolean>(false)

  async function deletePaste(id: number) {
    await axios.delete(baseUrl + `/pastes/${id}`);
    props.changeToggle(!props.toggle);
  }

  function editPaste() {
    setShowEditForm(true);
  }

  return (
    <section className="SinglePasteElement">
      {props.data.title && <p className="paste--title">{props.data.title}</p>}
      <ShowMoreText more="Show more" less="Show less" lines={5}>
        <p>{props.data.text}</p>
      </ShowMoreText>
      <p>{creationDateFormatter(props.data.creationdate)}</p>
      <div className="paste--buttons-container">
      <button onClick={() => setToggleComments((prev) => !prev)}>Comments</button>
        <button onClick={editPaste}>Edit</button>
        <button onClick={() => deletePaste(props.data.id)}>Delete</button>
      </div>
      {showEditForm && (
        <EditPasteForm
          changeToggle={props.changeToggle}
          toggle={props.toggle}
          data={props.data}
          changeToggleEditForm={setShowEditForm}
        />
      )}
      {toggleComments && <Comments/>}
    </section>
  );
}
