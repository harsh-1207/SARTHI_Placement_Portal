import React from 'react'
import './Applied_Placed_Card.css'

const Applied_Placed_Card = (props) => {
  return (
        <div className="card-wrapper" >
            <div className="info-side" >
                <h3 className="company_name">{props.companyName}</h3>
                <div className="company_type">Type: <span>{props.companyType}</span></div>
                <div className="company_CTC">CTC: <span>{props.companyCTC}</span></div>
            </div>
            <div className="status-side" style={{
                background : `${props.buttonColor}`
            }}>
                {props.status}
            </div>
        </div>
  )
}

export default Applied_Placed_Card