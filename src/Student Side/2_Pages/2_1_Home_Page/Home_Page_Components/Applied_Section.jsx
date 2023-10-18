import React, { useState } from 'react'
import Applied_Placed_Card from '../../../3_Components/Common Components/Applied_Placed_Card'
import { appliedCardData } from '../../../3_Components/Common Data/Applied_Card_Data'

const Applied_Section = () => {
  const [data, setData] = useState(appliedCardData)
  return (
    <div
          className="company_list_wrapper"
          style={{
            height: "90%",
            overflow: "auto",
            background: "transparent",
          }}
        >
          {
            data.map((currElem) => {
                const {id} = currElem;
                return <Applied_Placed_Card key = {id} {...currElem} />
            })
        }
    </div>
  )
}

export default Applied_Section
