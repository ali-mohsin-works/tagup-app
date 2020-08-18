import React from "react";
import "./logform.styles.scss";
import moment from "moment";

import CustomButton from "../custom-button/custombutton.component";
import CustomField from "../custom-field/customfield.component";
import CustomCard from "../custom-card/customcard.component";

class LogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      message: "",
    };
  }

  render() {
    const setTitle = (e) => this.setState({ title: e.target.value });
    const setMessage = (e) => this.setState({ message: e.target.value });

    const formSubmit = () => {
      if (this.state.title !== "" && this.state.message !== "") {
        var date_time = moment().format("HH:mm:ss A, MM-DD-YY");
        var id = 0;
        this.props.logs.map((log) => (id = parseInt(log.id) + 1));
        this.props.parrentUpdateState(
          id.toString(),
          this.state.title,
          this.state.message,
          date_time
        );
        this.setState({ title: "", message: "" });
      } else {
        alert("Please provide Log Title and Log Message");
      }
    };

    return (
      <div className="margins">
        <CustomCard logForm>
          <CustomField
            placeholder="enter log title"
            handleChange={setTitle}
            value={this.state.title}
          />
          <CustomField
            placeholder="enter log message"
            messageField
            handleChange={setMessage}
            value={this.state.message}
          />
          <CustomButton formBtn handleChange={formSubmit}>
            {" "}
            Submit Log{" "}
          </CustomButton>
        </CustomCard>
      </div>
    );
  }
}

export default LogForm;
