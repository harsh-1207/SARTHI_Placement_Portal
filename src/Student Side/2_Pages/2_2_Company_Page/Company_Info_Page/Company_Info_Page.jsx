import React from 'react'
import PageHeader from '../../../3_Components/Common Components/PageHeader'
import Company_Info_Card_1 from './Company_Info_Card_1'
import Company_Info_Card_2 from './Company_Info_Card_2'

const Company_Info_Page = () => {
  return (
    <>
      <div className="main-wrapper">
          <div className="navBarSpace"></div>
          <div className="main_page_wrapper">
            <PageHeader heading="COMPANY DETAILS" type='company_page' />
            <Company_Info_Card_1 />
            <Company_Info_Card_2 />
          </div>
        </div>
    </>
  )
}

export default Company_Info_Page
