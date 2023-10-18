import React from 'react'
// import LIST_CONTENT_CARD from '../../3_Components/Common Components/List_Content_Card'
import List_Content_Card from '../../../Student Side/3_Components/Common Components/List_Content_Card'


const Placed_Page_Card = () => {
  return (
    <>
        <LIST_CONTENT_CARD 
            nameField = 'Amazon'
            field2 = '2'
            field3 = '400000'
            field7 = 'i'
        />
        <LIST_CONTENT_CARD 
            name = 'Google'
            field2 = '3'
            field3 = '400000'
            field7 = 'i'
        />
        <LIST_CONTENT_CARD 
            name = 'Amazon'
            field2 = '3'
            field3 = '400000'
            field7 = 'i'
        />
        <LIST_CONTENT_CARD 
            name = 'Amazon'
            field2 = '4'
            field3 = '400000'
            field7 = 'i'
        />
    </>
  )
}

export default Placed_Page_Card
