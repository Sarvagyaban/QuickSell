import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Navbar";
import DashBoard from "./components/Kanban";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./components/Apifetch";

const App = () => {
  const dispatch = useDispatch();
// eslint-disable-next-line
  const  {quicksell} = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "10px" }}>
      <Header />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  );
};

export default App;
