import React from "react";

import CustomButton from "../custom-button/custombutton.component";
import CustomCard from "../custom-card/customcard.component";

class LogCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const removeLog = (e) => {
      const r = window.confirm("Do you really want to remove this log?");
      if (r === true) {
        console.log(e.target.id);
        const filteredLogs = this.props.logs.filter(
          (log) => log.id !== e.target.id
        );
        this.props.parrentUpdateState(filteredLogs);
      }
    };

    return (
      <div>
        <CustomCard>
          <h2>{this.props.log.title}</h2>
          <p>{this.props.log.message}</p>
          <h6>{this.props.log.date_time}</h6>
          <br />
          <CustomButton handleChange={removeLog} id={this.props.log.id}>
            {" "}
            Delete{" "}
          </CustomButton>
        </CustomCard>
      </div>
    );
  }
}

export default LogCard;
