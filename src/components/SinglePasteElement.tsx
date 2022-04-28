import { creationDateFormatter } from "../utils/creationDateFormatter";
import { pastesInterface } from "../utils/pastesInterface";
import ShowMoreText from "react-show-more-text";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { EditPasteForm } from "./EditPasteForm";
import { useState } from "react";
import { ExistingComments } from "./ExistingComments";
import { CreateCommentForm } from "./CreateCommentForm";

interface SinglePasteElementProps {
  data: pastesInterface;
  changeToggle: (arg: boolean) => void;
  toggle: boolean;
}

export function SinglePasteElement(
  props: SinglePasteElementProps
): JSX.Element {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [toggleCommentForm, setToggleCommentForm] = useState<boolean>(false);
  const [toggleComments, setToggleComments] = useState<boolean>(false);

  async function deletePaste(id: number) {
    await axios.delete(baseUrl + `/pastes/${id}`);
    props.changeToggle(!props.toggle);
  }

  function editPaste() {
    setShowEditForm(true);
  }

  function addComment() {
    console.log("Hello");
    setToggleCommentForm((prev) => !prev);
  }

  return (
    <section className="SinglePasteElement">
      {props.data.title && <p className="paste--title">{props.data.title}</p>}
      <div className="paste-content">
        <ShowMoreText more="Show more" less="Show less" lines={5}>
          <p className="paste-content">{props.data.text}</p>
        </ShowMoreText>
        <em className="date-font">
          {creationDateFormatter(props.data.creationdate)}
        </em>
      </div>

      <div className="paste--buttons-container">
        <button
          className="button"
          onClick={() => setToggleComments((prev) => !prev)}
        >
          {toggleComments ? "Hide Comments" : "Show Comments"}
        </button>
        <button className="button" onClick={addComment}>
          {toggleCommentForm ? "Cancel Comment" : "Add Comment"}
        </button>
        <button className="button" onClick={editPaste}>
          Edit Paste
        </button>
        <button className="button" onClick={() => deletePaste(props.data.id)}>
          Delete Paste
        </button>
      </div>

      {toggleCommentForm && (
        <CreateCommentForm
          changeToggle={props.changeToggle}
          toggle={props.toggle}
          pasteId={props.data.id}
          changeToggleCommentForm={setToggleCommentForm}
        />
      )}
      {showEditForm && (
        <EditPasteForm
          changeToggle={props.changeToggle}
          toggle={props.toggle}
          data={props.data}
          changeToggleEditForm={setShowEditForm}
        />
      )}
      {toggleComments && (
        <ExistingComments
          pasteId={props.data.id}
          toggle={props.toggle}
          changeToggle={props.changeToggle}
        />
      )}
    </section>
  );
}
