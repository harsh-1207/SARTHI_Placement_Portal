import React from 'react'
// import UPCOMING_COMPANY_CARD from '../../../3_Components/Common Components/Upcoming_Company_Card'
import UPCOMING_COMPANY_CARD from '../../../../Student Side/3_Components/Common Components/Upcoming_Company_Card'
import './Upcoming_Company_Section.css'

const Upcoming_Company_Section = () => {
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
            <UPCOMING_COMPANY_CARD 
                name = "MICROSOFT"
                type = "Product Based"
                ctc = "4000000"
                date = "26 June 2024"
                applicationCount = "2"
            />
            <UPCOMING_COMPANY_CARD 
                name = "ACCENTURE"
                type = "Service Based"
                ctc = "100000"
                date = "30 September 2024"
                applicationCount = "89"
            />
            <UPCOMING_COMPANY_CARD 
                name = "ACCENTURE"
                type = "Service Based"
                ctc = "100000"
                date = "30 September 2024"
                applicationCount = "89"
            />
            <UPCOMING_COMPANY_CARD 
                name = "ACCENTURE"
                type = "Service Based"
                ctc = "100000"
                date = "30 September 2024"
                applicationCount = "89"
            />
            <UPCOMING_COMPANY_CARD 
                name = "ACCENTURE"
                type = "Service Based"
                ctc = "100000"
                date = "30 September 2024"
                applicationCount = "89"
            />
            <UPCOMING_COMPANY_CARD 
                name = "ACCENTURE"
                type = "Service Based"
                ctc = "100000"
                date = "30 September 2024"
                applicationCount = "89"
            />
        </div>
    </div>
  )
}

export default Upcoming_Company_Section
