import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../utils/baseUrl";

export interface formDataInterface {
  comment: string
}

interface CreateCommmentFormProps {
  changeToggle: (arg: boolean) => void,
  toggle: boolean,
  pasteId: number,
}

export function CreateCommentForm(props: CreateCommmentFormProps): JSX.Element {
  const [formData, setFormData] = useState<formDataInterface>({
    comment: ""
  });

  function handleFormChange(
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setFormData((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios.post(baseUrl + `/pastes/${props.pasteId}/comments`, formData);
    setFormData({ comment: "" });
    props.changeToggle(!props.toggle);
  }

  return (
    <>
      <div className="createPasteForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment-form-comment">Comment</label>
          <textarea
            className="form--textarea"
            name="comment"
            value={formData.comment}
            id="comment-form-comment"
            placeholder="Write a comment!"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <button className="form--button">Submit</button>
        </form>
      </div>
    </>
  );
}
