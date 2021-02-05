import React from "react";
import "./styles.css";
import Dashboard from "./Dashboard";
import Searchbox from "./Searchbox";
import { useFaker } from "react-fakers";
import { useGlobal, setGlobal } from "reactn";

export default function App() {
  const { success, error, loading } = useFaker();
  const [isLoading, setIsLoading] = useGlobal("isLoading");
  //const [data, setData] = useGlobal("data");

  React.useEffect(() => {
    console.log(loading);
    // setGlobal({ isLoading: !loading });
    setIsLoading(!loading);
    if (error) setGlobal({ dataError: error });
  }, [loading, error]);

  React.useEffect(() => {
    setGlobal({ data: success });
  }, [success]);

  return (
    <div className="App">
      <h1>Randomly Generated Names</h1>
      <Searchbox />
      <Dashboard />
    </div>
  );
}
