import React from "react";

const Company_Info_List_Card = (props) => {
  return (
    <div
      style={{
        height:'20%',
        width:'98%',
        background:'white',

        display:'flex',
        justifyContent:'center',
        alignItems:'center',

        padding:'0 2vh',
        marginTop:'1vh',
        borderRadius:'20px'
      }}
    >
      <div
        className="title-wrapper"
        style={{
            width:'50%',
            height:'100%',
            background:'yellow',
            display:'flex',
            alignItems:'center',
            background:'transparent',
            fontSize:'1.4rem',
            color:'gray',
            fontWeight:'bold',

        }}
      >
        {props.title} :
      </div>
      <div
        className="info-wrapper"
        style={{
            width:'50%',
            height:'100%',
            background:'green',
            display:'flex',
            justifyContent:'center',
            alignItems:'flex-end',
            background:'transparent',
            fontSize:'1.4rem',
            color:'black',
            fontWeight:'bold',

        }}
      >
        {props.info}
      </div>
    </div>
  );
};

export default Company_Info_List_Card;
