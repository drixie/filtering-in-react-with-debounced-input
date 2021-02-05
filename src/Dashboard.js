import React from "react";
import { useGlobal } from "reactn";

function Dashboard() {
  const [displayedData] = useGlobal("displayedData");
  const [isLoading] = useGlobal("isLoading");

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}

      <ul>
        {!isLoading &&
          displayedData &&
          displayedData.map((val, id) => (
            <li key={val.uuid}>
              {val.firstname} {val.lastname} - {val.email}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Dashboard;
