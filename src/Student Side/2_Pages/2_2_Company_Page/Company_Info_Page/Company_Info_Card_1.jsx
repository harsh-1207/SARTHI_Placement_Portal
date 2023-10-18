import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import TitleIcon from '@mui/icons-material/Title';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Company_Info_Card_1 = () => {
  return (
    <>
        <div className="header_wrapper" style={{
            width : '90vw',
            height : '30vh',
            margin : '2vh 4vh',
            // padding : '1vh 2vh',
    
            // background : 'transparent',
            border : 'red 2px',
            borderRadius : '30px',

            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <div className="companyName infoField">
                <div className="icon-wrapper"><BusinessIcon className='icon' style={{fontSize: '3.5rem'}}/></div>
                <div className="tagTitle">COMPANY NAME</div>
                <div className="line"></div>
                <div className="tagName">AMAZON</div>
            </div>
            <div className="companyType infoField">
                <div className="icon-wrapper"><TitleIcon className='icon' style={{fontSize: '3.5rem'}}/></div>
                <div className="tagTitle">COMPANY TYPE</div>
                <div className="line"></div>
                <div className="tagName">PRODUCT BASED</div>
            </div>
            <div className="companyCTC infoField">
                <div className="icon-wrapper"><PaymentIcon className='icon' style={{fontSize: '3.5rem'}}/></div>
                <div className="tagTitle">COMPANY CTC</div>
                <div className="line"></div>
                <div className="tagName">4000000</div>
            </div>
            <div className="companyDate infoField">
                <div className="icon-wrapper"><CalendarMonthIcon className='icon' style={{fontSize: '3.5rem'}}/></div>
                <div className="tagTitle">DATE OF ARRIVAL</div>
                <div className="line"></div>
                <div className="tagName">26 JUNE, 2024</div>
            </div>
    
            
        </div>
    </>
  );
}

export default Company_Info_Card_1
