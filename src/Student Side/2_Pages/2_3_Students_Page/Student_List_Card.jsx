import React, { useState } from 'react'
import List_Content_Card from '../../3_Components/Common Components/List_Content_Card'
import { studentData } from '../../3_Components/Common Data/Student_Page_Data'


const Student_List_Card = () => {
    const [data, setData] = useState(studentData);
  return (
    <>
        {/* <List_Content_Card 
            type = 'STUDENT'
            name = 'Harsh Bisht'
            email = 'harshbisht@gmail.com'
            field2 = 'CSDS'
            field3 = 'A'
            field4 = '2000321540026'
            field5 = '8'
            field6 = 'i'
        /> */}
        {
            data.map((currElem) => {
                const {id} = currElem;
                return <List_Content_Card key = {id} {...currElem} />
            })
        }
    </>
  )
}

export default Student_List_Card
