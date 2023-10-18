import React from 'react'

const Student_Info_SubCard = (props) => {
  return (
    <div className='subCard' style={{
        height:'7%',
        width:'100%',
        background:'white',
        borderRadius: '10px',
        margin:'1vh 0',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        <div className="title" style={{
            background:'transparent',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'gray'
        }}>
            {props.title} :
        </div>
        
        <div className="info" style={{
            background:'transparent',
            fontSize: '1rem',
            fontWeight: 'bold'
        }}>
            {props.info}
        </div>

    </div>
  );
}

export default Student_Info_SubCard
