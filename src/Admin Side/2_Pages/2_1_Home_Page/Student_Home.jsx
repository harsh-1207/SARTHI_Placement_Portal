import React from 'react'
// import '../../3_Components/Common CSS/SideBarGap.css'
// import Header from './Home_Page_Components/Header'
// import Content from './Home_Page_Components/Content'

import '../../../Student Side/3_Components/Common CSS/SideBarGap.css'
import Header from './Home_Page_Components/Header'
import Content from './Home_Page_Components/Content'

const Student_Home = () => {
  return (
    <>
      <div className="main-wrapper" >
        <div className="navBarSpace" ></div>
        {/* actual page starts here -> right of the sideBar  */}
        <div className="actual-page-wrapper">
          <Header />
          <Content />
        </div>
      </div>
    </>
  )
}
 
export default Student_Home