import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { pastesInterface } from "../utils/pastesInterface";

interface formDataInterface {
  title: string;
  text: string;
}

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
    console.log(formData);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios.put(baseUrl + `/pastes/${props.data.id}`, formData);
    props.changeToggleEditForm(false);
    props.changeToggle(!props.toggle);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="paste-form-title">Title</label>
      <input
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
        name="text"
        value={formData.text}
        id="paste-form-text"
        placeholder="Paste Text Here"
        onChange={(e) => handleFormChange(e)}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
