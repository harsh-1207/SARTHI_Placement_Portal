import React, { useState } from "react";
import Applied_Section from "../../2_Pages/2_1_Home_Page/Home_Page_Components/Applied_Section";
import Placed_Section from "../../2_Pages/2_1_Home_Page/Home_Page_Components/Placed_Section";


const Applied_Placed = () => {
  const [appliedSection, setAppliedSection] = useState(1);
  const [appliedBg, setAppliedBg] = useState('rgba(70, 70, 70, 0.433)');
  const [placedBg, setPlacedBg] = useState('transparent');

  const setApplied = () => {
    setAppliedSection(1);
    setAppliedBg('rgba(70, 70, 70, 0.433)');
    setPlacedBg('transparent');
  }
  const setPlaced = () => {
    setAppliedSection(0);
    setAppliedBg('transparent');
    setPlacedBg('rgba(70, 70, 70, 0.433)');
  }

  
  return (
    <>
      <div
        className="heading-wrapper"
        style={{
          width: "40vw",
          height: "5%",

          display: "flex",
          background: "transparent",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="applied-wrapper" style={{
          background : 'transparent',
        }}>
          <h3 onClick={setApplied}
            style={{
              width: "20vw",
              height: '4vh',
              margin: "2% 0",
              color: "pink",

              display: "flex",
              justifyContent: "center",
              alignItems: 'center',
              
              borderRadius: '20px',  
              cursor : 'pointer',

              background: `${appliedBg}`,
            }}
          >
            COMPANIES APPLIED
          </h3>
        </div>
        <div className="placed-wrapper" style={{
          background : 'transparent',
        }}>
          <h3 onClick={setPlaced} 
            style={{
              width: "20vw",
              height: '4vh',
              margin: "2% 0",
              color: "pink",

              display: "flex",
              justifyContent: "center",
              alignItems: 'center',

              borderRadius: '20px',
              cursor : 'pointer',

              background: `${placedBg}`,
            }}
          >
            COMPANIES PLACED
          </h3>
        </div>
      </div>

      {appliedSection ? 
        <Applied_Section />
        : 
        <Placed_Section />
      }
    </>
  );
};

export default Applied_Placed;

{/* <h1
  style={{
    width: "40vw",
    margin: "2% 0",
    color: "pink",
    background: "transparent",
  }}
>
  COMPANIES APPLIED
</h1>; */}
