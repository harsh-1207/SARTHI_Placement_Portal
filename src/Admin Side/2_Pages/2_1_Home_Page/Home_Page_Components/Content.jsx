import React from 'react'
import UPCOMING_COMPANY_SECTION from './Upcoming_Company_Section'
import APPLIED_PLACED from '../../../../Student Side/3_Components/Common Components/Applied_Placed'

const Content = () => {
  return (
    <>
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
            <div className="upcoming_companies_left_content" style={{
                height : '100%',
                width : '49%',
                padding : '1vh 2vh',

                background : '#242526',
                borderRadius : '30px'
            }}>
                <UPCOMING_COMPANY_SECTION />
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
    </>
  )
}

export default Content