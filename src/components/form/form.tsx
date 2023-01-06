import React from "react";

interface FormProp {
}

interface FormState {
  inputValue: string;
  textareaValue: string;
}

export default class Form extends React.Component<FormProp, FormState> {
  constructor(props: FormProp) {
    super(props);

    this.state = {
      inputValue: "",
      textareaValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    console.log(event.target, '>event.target', name, value);
    this.setState({
      [name]: value,
    } as Pick<FormState, keyof FormState>);
  }

  submitForm(event: React.FormEvent<HTMLFormElement>): void {
    console.log("form", event);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1>Form</h1>
        <form onSubmit={ this.submitForm }>
          <label>
            입력:
            <input type="text" id="inputValue" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} />
          </label>
          <div>
            <textarea id="textareaValue" name="textareaValue" value={this.state.textareaValue} onChange={this.handleChange}></textarea>
          </div>
          <button type="submit">확인</button>
        </form>
        <p>inputValue: {this.state.inputValue}</p>
        <p>textareaValue: {this.state.textareaValue}</p>
      </>
    );
  }
}
