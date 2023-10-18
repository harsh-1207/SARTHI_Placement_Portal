import React, { useState } from "react";
import "./Company_Info.css";
import Company_Info_List_Card from "./Company_Info_List_Card";
import { companyInfoData } from "../../../3_Components/Common Data/Company_Info_Data";

const Company_Info_Card_2 = () => {
    const [data, setData] = useState(companyInfoData);
  return (
    <>
      <div
        className="header_wrapper"
        style={{
          width: "90vw",
          height: "35vh",
          margin: "2vh 4vh",

          background: "#242526",
          border: "red 2px",
          borderRadius: "30px",
        }}
      >
        <div className="header-wrapper">
          <div className="header-main">ELIGIBILITY CRITERIA</div>
          <div className="applied_button">APPLIED</div>
        </div>
        <div className="list-wrapper">
            {
                data.map((currElem) => {
                    const {id} = currElem;
                    return <Company_Info_List_Card key = {id} {...currElem} />
                })
            }
        </div>
      </div>
    </>
  );
};

export default Company_Info_Card_2;
