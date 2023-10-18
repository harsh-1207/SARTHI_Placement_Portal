import React from 'react'
import './List_Component_Template.css'
import COMPANY_LIST_CARD from '../../2_Pages/2_2_Company_Page/Company_List_Card'
import STUDENT_LIST_CARD from '../../2_Pages/2_3_Students_Page/Student_List_Card'
import APPLIED_PAGE_CARD from '../../2_Pages/2_4_Applied_Page/Applied_Page_Card'
import PLACED_PAGE_CARD from '../../2_Pages/2_5_Placed_Page/Placed_Page_Card'
 
const List_Component_Template = (props) => {
  return (
    <> 
        <div className="list-wrapper" style={{
            width : '90vw',
            height : '81vh',
            margin : '2vh 4vh',
            padding : '1vh 2vh',
            background:'#242526',
            borderRadius: '30px'
        }}>
            <div className="list-heading-wrapper" style={{
                width : '88vw',
                height : '6vh',
                padding : '1vh 0',
                background:'transparent',

                display: 'flex',
                alignItems: 'center',

                fontWeight: 'bold',
                fontSize: '2rem',
                color: 'pink',
            }}>
                NO.OF {props.title} ({props.count})
            </div>

            <div className="list-content-wrapper" style={{
                width : '88vw',
                height : '73vh',
                // padding : '1vh 0',
                background:'transparent',
                borderRadius: '10px 10px 0 0',
                padding: '0'
            }}>
                <div className="title-wrapper" style={{
                    width : '88vw',
                    height : '5vh',
                    background:'rgb(243, 84, 111)',
                    borderRadius: '10px 10px 0 0',

                    display: 'flex',
                    fontSize: '1.5rem',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    color: 'white'
                }}>
                    {/* these field flags are undefined so it renders, to remove one, pass it anything */}
                    {props.titleNameField !== undefined ? <div className="name-field field">{props.titleNameField}</div> : ""}
                    {props.titleField2 !== undefined ? <div className="field-2 field">{props.titleField2}</div> : ""}
                    {props.titleField3 !== undefined ? <div className="field-3 field">{props.titleField3}</div> : ""}
                    {props.titleField4 !== undefined ? <div className="field-4 field">{props.titleField4}</div> : ""}
                    {props.titleField5 !== undefined ? <div className="field-5 field">{props.titleField5}</div> : ""}
                    {props.titleField6 !== undefined ? <div className="field-6 field">{props.titleField6}</div> : ""}
                    {props.titleField7 !== undefined ? <div className="field-7 field">{props.titleField7}</div> : ""}
                </div>

                <div className="content-wrapper" style={{
                    width : '88vw',
                    height : '68vh',
                    background:'transparent',
                    overflow: 'auto'
                }}>
                    {
                        props.type === 'COMPANY'        // If we're in the company page, we render this
                        && 
                        <COMPANY_LIST_CARD />
                    }
                    {
                        props.type === 'STUDENT'        // If we're in the student page, we render this
                        && 
                        <STUDENT_LIST_CARD />
                    }
                    {
                        props.type === 'APPLIED'        // If we're in the student page, we render this
                        && 
                        <APPLIED_PAGE_CARD />
                    }
                    {
                        props.type === 'PLACED'
                        &&
                        <PLACED_PAGE_CARD />
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default List_Component_Template

