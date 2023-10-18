import React, { useState } from 'react'
import List_Content_Card from '../../3_Components/Common Components/List_Content_Card'
import { companyListData } from '../../3_Components/Common Data/Company_Page_Data'


const Company_List_Card = () => {
    const [data, setData] = useState(companyListData)
  return (
    <>
        <List_Content_Card 
            type = 'COMPANY'
            nameField = 'Amazon'
            field2 = 'Product'
            field3 = '26 June 2024'
            field4 = '4000000'
            field5 = '2024'
            field6 = 'i'
        />
        {
            data.map((currElem) => {
                const {id} = currElem;
                return <List_Content_Card key = {id} {...currElem} />
            })
        }
    </>
  )
}

export default Company_List_Card
