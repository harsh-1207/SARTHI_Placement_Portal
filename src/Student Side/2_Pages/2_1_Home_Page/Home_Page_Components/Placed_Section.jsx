import React, { useState } from 'react'
import Applied_Placed_Card from '../../../3_Components/Common Components/Applied_Placed_Card'
import { placedCardData } from '../../../3_Components/Common Data/Placed_Card_Data'

const Placed_Section = () => {
  const [data, setData] = useState(placedCardData)

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
          {
            data.map((currElem) => {
                const {id} = currElem;
                return <Applied_Placed_Card key = {id} {...currElem} />
            })
        }
    </div>
  )
}

export default Placed_Section
