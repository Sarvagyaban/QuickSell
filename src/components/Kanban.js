import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";

const Kanban = () => {
  const { selectedData } = useSelector(
    (state) => state.SelectDataReducer
  );

  const styles = {
    dashContainer: {
      display: "flex",
      alignItems: "flex-start",
      gap: "20px",
      flexWrap: "wrap",
      background: "white",
      padding: "5px 10px",
      justifyContent: "space-evenly",
    },
    dashCardContainer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      gap: "5px",
      width: "300px",
    },
    dashList: {
      height: "0px !important",
    },
  };

  return (
    selectedData && (
      <div style={styles.dashContainer}>
        {selectedData.map((elem, index) => (
          <React.Fragment key={index.id}>
            <div style={styles.dashCardContainer}>
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {}
                  <span>
                    {elem[index]?.title} {elem[index]?.value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <AiOutlinePlus /> <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div style={styles.dashList} className="flex-gap-1">
                {elem[index]?.value?.map((elem, ind) => (
                  <Card key={elem.id} id={elem.id} title={elem.title} tag={elem.tag} />
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    )
  );
};

export default Kanban;