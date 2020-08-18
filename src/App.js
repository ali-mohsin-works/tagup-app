import React from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import LogForm from "./components/log-form/logform.component";
import CustomField from "./components/custom-field/customfield.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      logs: [
        {
          id: "1",
          title: "Alarm high energy consumption is triggered",
          message:
            "Energy consumption of this asset is high. Please resolve this issue ASAP.",
          date_time: "08:11:03 AM, 05-14-18",
        },
        {
          id: "2",
          title: "New alarm created",
          message: 'A new alarm "Low Apparent Power" has been created. ',
          date_time: "06:21:44 PM, 05-13-18",
        },
      ],
      searchFieldData: "",
    };
  }

  render() {
    const { logs, searchFieldData } = this.state;

    const addLogToState = (id, title, message, date_time) =>
      this.setState({
        logs: [
          ...logs,
          { id: id, title: title, message: message, date_time: date_time },
        ],
        searchField: searchFieldData,
      });

    const removeLogFromState = (logs) =>
      this.setState({
        logs: logs,
        searchField: searchFieldData,
      });

    const filteredLogs = logs.filter((log) =>
      log.title.toLowerCase().includes(searchFieldData.toLowerCase())
    );

    return (
      <div className="App">
        <LogForm logs={filteredLogs} parrentUpdateState={addLogToState} />
        <CustomField
          placeholder="search in logs"
          searchField
          handleChange={(e) =>
            this.setState({ searchFieldData: e.target.value })
          }
        />
        <CardList logs={filteredLogs} parrentUpdateState={removeLogFromState} />
      </div>
    );
  }
}

export default App;
