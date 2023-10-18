import React from 'react'
// import Applied_Placed_Card from '../../../3_Components/Common Components/Applied_Placed_Card'
import Applied_Placed_Card from '../../../../Student Side/3_Components/Common Components/Applied_Placed_Card'

const Applied_Section = () => {
  return (
    <div
          className="company_list_wrapper"
          style={{
            height: "90%",
            overflow: "auto",
            background: "transparent",
          }}
        >
          <Applied_Placed_Card
            companyName="Amazon"
            companyType="Product"
            companyCTC="100000"
            status="Applied"
            buttonColor="pink"
          />
    </div>
  )
}

export default Applied_Section
