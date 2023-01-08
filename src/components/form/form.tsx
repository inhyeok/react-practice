import React, { useState } from "react";

interface FormProp {
}

// interface FormState {
//   inputValue: string;
//   textareaValue: string;
// }

const Form = (props: FormProp): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  
  const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log("form", event);
    event.preventDefault();
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={ submitForm }>
        <label>
          입력:
          <input type="text" id="inputValue" name="inputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </label>
        <div>
          <textarea id="textareaValue" name="textareaValue" value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)}></textarea>
        </div>
        <button type="submit">확인</button>
      </form>
      <p>inputValue: {inputValue}</p>
      <p>textareaValue: {textareaValue}</p>
    </>
  );
}

export default Form;
