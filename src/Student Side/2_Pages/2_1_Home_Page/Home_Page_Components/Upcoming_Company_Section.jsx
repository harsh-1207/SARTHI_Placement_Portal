import React, { useState } from 'react'
import UPCOMING_COMPANY_CARD from '../../../3_Components/Common Components/Upcoming_Company_Card'
import './Upcoming_Company_Section.css'
import { upcomingCompanyCardData } from '../../../3_Components/Common Data/Upcoming_Company_Card_Data'


const Upcoming_Company_Section = () => {
  const [data, setData] = useState(upcomingCompanyCardData)

  return (
    <div className='upcoming-company-wrapper' style={{
        width : '100%',
        height : '100%',
        background : 'transparent',
    }}>
        <div className="header"  style={{
          width:'100%',
          height: '5%',
          background: 'transparent',
        }}>
            <h1 style={{
                width:'100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                background: 'transparent',   
                color: 'pink',    
            }}>UPCOMING COMPANIES</h1>
        </div>

        <div className="cards-section-wrapper" style={{
            background:'transparent',
            height: '93%',
            overflow: 'auto',
            borderRadius: '30px',
        }}>
            {
                data.map((currElem) => {
                    const {id} = currElem;
                    return <UPCOMING_COMPANY_CARD key = {id} {...currElem} />
                })
            }
        </div>
    </div>
  )
}

export default Upcoming_Company_Section
