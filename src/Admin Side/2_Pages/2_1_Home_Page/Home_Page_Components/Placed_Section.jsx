import React from 'react'
// import Applied_Placed_Card from '../../../3_Components/Common Components/Applied_Placed_Card'
import Applied_Placed_Card from '../../../../Student Side/3_Components/Common Components/Applied_Placed_Card'

const Placed_Section = () => {
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
            companyName="TCS"
            companyType="Service"
            companyCTC="400000"
            status="Placed"
            buttonColor="lightGreen"
          />
          <Applied_Placed_Card
            companyName="Infosys"
            companyType="Service"
            companyCTC="500000"
            status="Placed"
            buttonColor="lightGreen"
          />
    </div>
  )
}

export default Placed_Section
