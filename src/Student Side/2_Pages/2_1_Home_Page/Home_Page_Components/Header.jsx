import React from "react";

const Header = () => {
  return <div className="header_wrapper" style={{
      width : '90vw',
      height : '16vh',
      margin : '2vh 4vh',
      padding : '1vh 2vh',

      background : '#242526',
      border : 'red 2px',
      borderRadius : '30px',
    //   background : '#000000'
  }}>
      <div className="heading_1" style={{
          height : '30%',
          fontFamily : 'Nunito Sans, sans-serif',
          fontSize : '3vh',
          background : 'transparent',
          color : 'white',

          display : 'flex',
          alignItems : 'flex-end',
      }}>
        Welcome to
      </div>
 
      <div className="heading_2" style={{
          height : '40%',
          fontFamily : 'Anton, sans-serif',
          fontSize : '5vh',
          background : 'transparent',
          color : 'pink',

          display : 'flex',
          alignItems : 'center',
      }}>
        SARTHI - YOUR PLACEMENT PORTAL
      </div>

      <div className="sub-heading" style={{
          height : '30%',
          fontSize : '2vh',
          background : 'transparent',
          color : '#718096',

          display : 'flex',
          alignItems : 'center',
      }}>
        Here You get all the details about the upcoming company's visting our college and all there package details.
      </div>
  </div>;
};

export default Header;
