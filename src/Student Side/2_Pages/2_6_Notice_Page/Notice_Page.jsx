import React from 'react'
import '../../3_Components/Common CSS/SideBarGap.css'
import PageHeader from '../../3_Components/Common Components/PageHeader'


const Notice_Page = () => {
  return (
    <>
     <div className="main-wrapper" >
        <div className="navBarSpace" ></div>
        <PageHeader heading="NOTICE" type='notice_page'/>

      </div>
    </>
  )
}

export default Notice_Page