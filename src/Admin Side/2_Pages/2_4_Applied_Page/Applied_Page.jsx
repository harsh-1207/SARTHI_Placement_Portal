import React from 'react'
// import '../../3_Components/Common CSS/SideBarGap.css'
// import PageHeader from '../../3_Components/Common Components/PageHeader'
// import List_Component_Template from '../../3_Components/Common Components/List_Component_Template'
import '../../../Student Side/3_Components/Common CSS/SideBarGap.css'
import PageHeader from '../../../Student Side/3_Components/Common Components/PageHeader'
import List_Component_Template from "../../../Student Side/3_Components/Common Components/List_Component_Template";

const Applied_Page = () => {
  return (
    <>
     <div className="main-wrapper" >
        <div className="navBarSpace" ></div>
            <div className="main_page_wrapper">
              <PageHeader heading="APPLIED STUDENT'S LIST" type='applied_page'/>
              
              <List_Component_Template 
                type = 'APPLIED'
                title = 'STUDENTS APPLIED'
                count = '4'

                titleNameField = 'NAME'
                titleField2 = 'USN'
                titleField3 = 'BRANCH'
                titleField4 = 'COMPANY'
                titleField5 = 'TYPE'
                titleField6 = 'CTC'
                titleField7 = 'APPLIED'
              />
            </div>

      </div>
    </>
  )
}

export default Applied_Page