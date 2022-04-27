import React, { useState } from "react";

interface formDataInterface {
  title: string;
  text: string;
}

export function CreatePasteForm(): JSX.Element {
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
    console.log(formData);
  }

  return (
    <form>
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
