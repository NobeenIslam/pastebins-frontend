import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { pastesInterface } from "../utils/pastesInterface";
import { formDataInterface } from "./CreatePasteForm";

interface EditPasteFormProps {
  changeToggle: (arg: boolean) => void;
  toggle: boolean;
  data: pastesInterface;
  changeToggleEditForm: (arg: boolean) => void;
}

export function EditPasteForm(props: EditPasteFormProps): JSX.Element {
  const [formData, setFormData] = useState<formDataInterface>({
    title: props.data.title,
    text: props.data.text,
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axios.put(baseUrl + `/pastes/${props.data.id}`, formData);
    props.changeToggleEditForm(false);
    props.changeToggle(!props.toggle);
  }

  return (
    <div className="editPasteForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="paste-form-title">Title</label>
        <input
          className="form--input"
          name="title"
          value={formData.title}
          id="paste-form-title"
          placeholder="Title"
          type="text"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <label htmlFor="paste-form-text">Text</label>
        <textarea
          className="form--textarea"
          name="text"
          value={formData.text}
          id="paste-form-text"
          placeholder="Paste Text Here"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
