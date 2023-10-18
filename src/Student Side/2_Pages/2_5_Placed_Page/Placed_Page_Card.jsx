import React, { useState } from 'react'
import LIST_CONTENT_CARD from '../../3_Components/Common Components/List_Content_Card'
import { placedPageData } from '../../3_Components/Common Data/Placed_Page_Data'


const Placed_Page_Card = () => {
  const [data, setData] = useState(placedPageData);
  return (
    <>
        {
            data.map((currElem) => {
                const {id} = currElem;
                return <LIST_CONTENT_CARD key = {id} {...currElem} />
            })
        }
    </>
  )
}

export default Placed_Page_Card
