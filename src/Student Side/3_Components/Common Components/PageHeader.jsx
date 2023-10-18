import React from 'react'
import Company_page_BreadCrumb from '../Common Components/BreadCrumbs/Company_Page_BreadCrumb'
import Student_Page_BreadCrumb from '../Common Components/BreadCrumbs/Student_Page_BreadCrumb'
import Applied_Page_BreadCrumb from '../Common Components/BreadCrumbs/Applied_Page_BreadCrumb'
import Notice_Page_BreadCrumb from '../Common Components/BreadCrumbs/Notice_Page_BreadCrumb'
import Placed_Page_BreadCrumb from '../Common Components/BreadCrumbs/Placed_Page_BreadCrumb'
import Profile_Page_BreadCrumb from '../Common Components/BreadCrumbs/Profile_Page_BreadCrumb'

const PageHeader = (props) => {
    return <div className="header_wrapper" style={{
        width : '90vw',
        height : '13vh',
        margin : '2vh 4vh',
        padding : '1vh 2vh',
  
        background : '#242526',
        border : 'red 2px',
        borderRadius : '30px',
    }}>
        <div className="heading_2" style={{
            height : '70%',
            fontFamily : 'Anton, sans-serif',
            fontSize : '5vh',
            background : 'transparent',
            color : 'pink'
        }}>
          {props.heading}
        </div>

        <div className="breadcrumb-wrapper" style={{
            height:'30%',
            width:'30%',
            background:'transparent',
            color:'white',
        }}>
            {
                props.type === 'company_page'
                &&
                <Company_page_BreadCrumb />
            }
            {
                props.type === 'applied_page'
                &&
                <Applied_Page_BreadCrumb />
            }
            {
                props.type === 'student_page'
                &&
                <Student_Page_BreadCrumb />
            }
            {
                props.type === 'notice_page'
                &&
                <Notice_Page_BreadCrumb />
            }
            {
                props.type === 'placed_page'
                &&
                <Placed_Page_BreadCrumb />
            }
            {
                props.type === 'profile_page'
                &&
                <Profile_Page_BreadCrumb />
            }
        </div>

        {/* <h3>BreadCrumbs see yt</h3> */}

  
    </div>;
}
 
export default PageHeader
