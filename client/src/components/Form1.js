import React, { Component } from "react";
import axios from "axios";
import "./Form.css";
import "./Upload.scss";
import Submit from "../components/Submit";
import { Route } from "react-router-dom";
class Certification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certicationName: "",
      issuer: "",

      formErrors: {},
    };

    this.initialState = this.state;
  }

  handleFormValidation() {
    const { certicationName, issuer } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //certification name
    if (!certicationName) {
      formIsValid = false;
      formErrors["studNameErr"] = "Please enter certification name";
    }

    //Issuer
    if (!issuer) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Please enter issuer name";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("click click");
    // window.location.href = "http://google.com";
    if (this.handleFormValidation()) {
      <Route path="/Submit" component={Submit} />;
      // alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
  };
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    console.log("click");
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    axios.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    const { studNameErr, emailIdErr } = this.state.formErrors;

    return (
      <div className="formDiv">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="certify">
              <div id="parent">
                {" "}
                <div className="name1">
                  <label htmlFor="certification">Certification name</label>
                </div>
                <div className="name2">
                  <label htmlFor="emailId">Issuer</label>
                </div>
              </div>
              <div id="parent1" className="parent1">
                <div className="name3">
                  <input
                    type="text"
                    name="certification name"
                    value={this.state.studName}
                    onChange={this.handleChange}
                    placeholder="Enter certification name"
                    className={studNameErr ? " showError" : ""}
                  />
                  {studNameErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {studNameErr}
                    </div>
                  )}
                </div>

                <div className="name4">
                  <div className="issuer">
                    <input
                      type="text"
                      value={this.state.emailId}
                      onChange={this.handleChange}
                      placeholder="Enter issuer"
                      className={emailIdErr ? " showError" : ""}
                    />
                    {emailIdErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {emailIdErr}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <input
              id="file"
              // className="btn-2"
              className="upload-box"
              type="file"
              placeholder="uuuuu"
              onChange={this.onFileChange}
              for="file"
              data-text="Select your file!"
            />
            {/* <label for="file" class="btn-2">
              UPLOAD
            </label> */}
            <h1 style={{ textAlign: "center" }} class="text-sm ...">
              (File format should be only pdf and jpg)
            </h1>
            <div className="submit">
              <button onClick={this.handleSubmit}>
                {/* <Route path="/Submit" component={Submit} /> */}
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> SAVE CERTIFICATIONS</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Certification;
