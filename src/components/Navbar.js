import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Data } from "./Apifetch";

// eslint-disable-next-line
const styles = {
topheader: {
    paddingleft: "10px",
},

displayButton: {
    position: "relative",
},

displayButtonbutton :
{
    color: "black",
    padding: "10px",
    borderradius: "10%",
    bordercolor: "white",
},

selectGroup :{
    padding: "3px",
    display: "flex",
    justifycontent: "space-between",
},

dropOnClick :{
    // display: "flex",
    // flexdirection: "column",
    padding: "10px",
    justifycontent: "space-evenly",
    position: "absolute",
    width: "250px",
    backgroundcolor: "#f8f8fa",
    borderradius: "10px",
    margintop: "10px",
    zindex: "",
},

btn :{
    background: "#f8f8fa",
    border: "1px solid silver",
    borderradius: "10px",
},

selectStyle :{
    width: "100px",
    borderradius: "5px",
    background: "#f8f8fa",
    padding: "2px 5px",
}};
const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const Navbar = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    if (groupValue === "user") {
      dispatch(
        Data(groupValue, {
          allTickets,
          allUser,
        }, orderValue)
      );
    } else {
      dispatch(Data(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    <div className="topheader">
      <div className="displayButton">
        <button className="headerButton"onClick={() => setDisplayOnClick(!displayOnClick)}>
          {" "}
          <TiThList /> Display  ▼
        </button>
<span style={{ "float": "right"}}> Designed By - <a href="https://sarvagyaban.github.io/Portfolio/" target="blank">Sarvagya Bansal</a></span>
        {displayOnClick && (
          <>
            <div style={{margin: "10px"}} className="dropOnClick">
              <div className="selectGroup">
                <span>Grouping  </span>
                <select
                  value={groupValue}
                  onChange={(e) => handleGroupValue(e, true)}
                  className="selectStyle"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div style={{margin: "5px"}}className="selectGroup">
                <span>Ordering </span>
                <select
                  value={orderValue}
                  onChange={(e) => handleGroupValue(e, false)}
                  className="selectStyle"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
          
        )}
      </div>
    </div>
  );
};


export default Navbar;
