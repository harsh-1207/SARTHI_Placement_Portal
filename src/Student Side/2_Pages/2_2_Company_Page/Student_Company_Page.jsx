import React from "react";
// import NavBar from '../../3_Components/NavBar'
import "../../3_Components/Common CSS/SideBarGap.css";
import "./Student_Company_Page.css";
import PageHeader from "../../3_Components/Common Components/PageHeader";
import List_Component_Template from "../../3_Components/Common Components/List_Component_Template";

const Student_Company_Page = () => {
  return (
    <>
      {/* to provide the contect that this is the company component  */}
        <div className="main-wrapper">
          <div className="navBarSpace"></div>
          <div className="main_page_wrapper">
            <PageHeader heading="COMPANY'S LIST" type='company_page' />

            <List_Component_Template
              type="COMPANY"
              title="COMPANIES"
              count="4"
              titleNameField="NAME"
              titleField2="TYPE"
              titleField3="DATE OF ARRIVAL"
              titleField4="CTC"
              titleField5="YEAR"
              titleField6="MORE INFO"
              // field5flag = '1'
            />
          </div>
        </div>
    </>
  );
};

export default Student_Company_Page;