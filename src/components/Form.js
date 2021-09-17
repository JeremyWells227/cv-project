import React from "react";
import Field from "./Field.js";
import ExpandableList from "./ExpandableList";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: true,
    };
    this.toggleEditable = this.toggleEditable.bind(this);
  }

  toggleEditable(e) {
    e.preventDefault();
    this.setState({
      editable: !this.state.editable,
    });
    return false;
  }
  render() {
    let btnText = this.state.editable ? "Save" : "Edit";
    return (
      <div>
        <form action="" onSubmit={this.toggleEditable}>
          <div>
            <h3>Personal Information</h3>
            <Field
              labelText="First Name"
              editable={this.state.editable}
              labelName="firstname"
            />
            <Field
              labelText="Last Name"
              editable={this.state.editable}
              labelName="lastname"
            />
            <Field
              labelText="Email"
              editable={this.state.editable}
              labelName="email"
            />
            <Field
              labelText="Phone"
              editable={this.state.editable}
              labelName="phone"
            />
          </div>
          <div>
            <h3>Work Experience</h3>
            <ExpandableList listName="work" editable={this.state.editable} />
          </div>
          <div>
            <h3>Education</h3>
            <ExpandableList
              listName="education"
              editable={this.state.editable}
            />
          </div>
          <button type="submit">{btnText}</button>
        </form>
      </div>
    );
  }
}
export default Form;
