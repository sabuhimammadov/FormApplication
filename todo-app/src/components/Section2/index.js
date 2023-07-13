import React from "react";

export class Section2 extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue1: "",
      inputValue2: "",
      textNote: "",
    };
    this.handleChangeInput1 = this.handleChangeInput1.bind(this);
    this.handleChangeInput2 = this.handleChangeInput2.bind(this);
    this.handleTextNode = this.handleTextNode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChangeInput1(e) {
    const inputValue1 = e.target.value.trim();
    //console.log(inputValue1)
    this.setState({ inputValue1 });
  }

  handleChangeInput2(e) {
    const inputValue2 = e.target.value.trim();
    // console.log(inputValue2)

    this.setState({ inputValue2 });
  }
  handleTextNode(e) {
    const textNote = e.target.value.trim();
    //console.log(textNote)
    this.setState({ textNote });
  }

  handleSubmit() {
    this.props.addInputValue(this.state);
    this.setState({ inputValue1: "", inputValue2: "", textNote: "" });
  }

  render() {
    return (
      <div className="bg-dark p-3 text-light rounded w-50 me-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label mb-2 fs-5">
            Your Name
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="name"
            placeholder="Your Name"
            value={this.state.inputValue1}
            onChange={this.handleChangeInput1}
          />
          <label htmlFor="email" className="form-label mb-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={this.state.inputValue2}
            onChange={this.handleChangeInput2}
          />
        </div>
      
        <button
          type="button"
          className="btn btn-success w-100"
          onClick={() => this.handleSubmit()}
        >
          Add
        </button>
      </div>
    );
  }
}
