import React, { useState } from 'react'
import List_Content_Card from '../../3_Components/Common Components/List_Content_Card'
import { appliedPageData } from '../../3_Components/Common Data/Applied_Page_Data'

const Applied_Page_Card = () => {
  const [data, setData] = useState(appliedPageData)

  return (
    <>
        {
            data.map((currElem) => {
                const {id} = currElem;
                return <List_Content_Card key = {id} {...currElem} />
            })
        }
    </>
  )
}

export default Applied_Page_Card
