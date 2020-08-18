import React from "react";
import "./card-list.styles.scss";
import LogCard from "../log-card/logcard.component";
import CustomCard from "../custom-card/customcard.component";

const CardList = ({ logs, parrentUpdateState }) => (
  <div className="card-list margins">
    {logs.length ? (
      logs.map((log) => (
        <LogCard
          key={log.id}
          log={log}
          logs={logs}
          parrentUpdateState={parrentUpdateState}
        />
      ))
    ) : (
      <CustomCard>
        <h2>No logs found</h2>
      </CustomCard>
    )}
  </div>
);

export default CardList;
