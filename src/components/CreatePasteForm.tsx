import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../utils/baseUrl";

export interface formDataInterface {
  title: string;
  text: string;
}

interface CreatePasteFormProps {
  changeToggle: (arg: boolean) => void;
  toggle: boolean;
}

export function CreatePasteForm(props: CreatePasteFormProps): JSX.Element {
  const [formData, setFormData] = useState<formDataInterface>({
    title: "",
    text: "",
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
    axios.post(baseUrl + "/pastes", formData);
    setFormData({ title: "", text: "" });
    props.changeToggle(!props.toggle);
  }

  return (
    <>
      <h2 className="page--title">Create A New Paste</h2>
      <div className="createPasteForm">
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
    </>
  );
}
