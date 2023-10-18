import React from 'react'
import '../../3_Components/Common CSS/SideBarGap.css'
import PageHeader from '../../3_Components/Common Components/PageHeader'
import LIST_COMPONENT_TEMPLATE from '../../3_Components/Common Components/List_Component_Template'



const Placed_Page = () => {
  return (
    <>
        <div className="main-wrapper" >
            <div className="navBarSpace" ></div>
            <div className="main_page_wrapper">
              <PageHeader heading="PLACED STUDENT'S LIST" type='placed_page'/>
              <LIST_COMPONENT_TEMPLATE
                type="PLACED"
                title="PLACED"
                count="4"

                titleNameField="COMPANIES"
                titleField2="NO. OF STUDENTS SELECTED"
                titleField3="PACKAGE"
                titleField4="STUDENT DETAILS"
                // field5flag = '1'
              />
            </div>
          </div>
    </>
  )
}

export default Placed_Page 