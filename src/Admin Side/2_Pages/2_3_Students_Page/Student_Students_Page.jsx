import React from 'react'
// import '../../3_Components/Common CSS/SideBarGap.css'
// import PageHeader from '../../3_Components/Common Components/PageHeader'
// import List_Component_Template from '../../3_Components/Common Components/List_Component_Template'

import '../../../Student Side/3_Components/Common CSS/SideBarGap.css'
import PageHeader from '../../../Student Side/3_Components/Common Components/PageHeader'
import List_Component_Template from "../../../Student Side/3_Components/Common Components/List_Component_Template";
// import NavBar from '../../3_Components/NavBar'

const Student_Students_Page = () => {
  return (
    <>
      <div className="main-wrapper" >
        <div className="navBarSpace" ></div>
          <div className="main-page-wrapper">
            <PageHeader heading="STUDENT'S LIST" type='student_page'/>
            <List_Component_Template 
              type = 'STUDENT'
              title = 'STUDENTS'
              count = '4'

              titleNameField = 'NAME'
              titleField2 = 'BRANCH'
              titleField3 = 'SECTION'
              titleField4 = 'USN'
              titleField5 = 'CGPA'
          />
          </div>

      </div>
    </>
  )
}

export default Student_Students_Page