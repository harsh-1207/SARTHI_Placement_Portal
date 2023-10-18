import React from 'react'
import '../../3_Components/Common CSS/SideBarGap.css'
import PageHeader from '../../3_Components/Common Components/PageHeader'
import APPLIED_PLACED from '../../3_Components/Common Components/Applied_Placed'
import STUDENT_INFO_CARD from './Student_Info_Card'

// import NavBar from '../../3_Components/NavBar'

const Student_Profile_Page = () => {
  return (
    <>
     <div className="main-wrapper" >
        <div className="navBarSpace" ></div>
            <div className="main-page-wrapper">

        <PageHeader heading="STUDENT PROFILE" type='profile_page'/>
        <div className="content-wrapper" style={{
            height : '78vh',
            width : '90vw',
            margin : '2vh 4vh',

            // background : 'red',
            borderRadius : '30px',

            display : 'flex',
            flexWrap : 'wrap',
            justifyContent : 'space-between'
        }}>
            {/* 2 sections so warp the 2  */}
            <div className="student_info_left_content" style={{
                height : '100%',
                width : '49%',
                padding : '1vh 2vh',

                background : '#242526',
                borderRadius : '30px'
            }}>
                <STUDENT_INFO_CARD />
            </div>
            <div className="applied_placed_right_content" style={{
                height : '100%',
                width : '49%',
                padding : '1vh 2vh',

                background : '#242526',
                borderRadius : '30px',
            }}>
                <APPLIED_PLACED />
                {/* <Applied_Placed /> */}
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Student_Profile_Page
