import React from 'react'
import { useNavigate } from 'react-router';
// import { typeOfPage } from '../../2_Pages/2_2_Company_Page/Student_Company_Page'

const List_Content_Card = (props) => {

    // const type = useContext(typeOfPage);
    const navigate = useNavigate();

    const showInfo = () => {
        if(props.type === 'COMPANY'){
            // alert('Company Page Info');
            navigate('/company-page/company-info')
        }
        else if(props.type === 'STUDENT'){
            // alert('Student Page Info');
            navigate('/student-page/student-info')
        }
        else if(props.type === 'PLACED'){
            alert('Placed Page Info');
        }
    }

  return (
    <div className="content-card-wrapper" style={{
        height: '10vh',
        width: '100%',
        background: 'transparent',
    }}>
        <div className="content" style={{
            height: '98%',
            width: '100%',
            background: 'transparent',

            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white'
        }}>
            {/* render name + email -> nameField is undefined  */}
            {props.nameField === undefined ? 
                <div className="name-email-field field" style={{display:'flex', flexDirection:'column'}}>
                    <div className="name-field" style={{background:'transparent'}}>{props.name}</div>
                    <div className="email-field" style={{background:'transparent'}}>{props.email}</div>
                </div> 
                : ""
            }
            {/* render nameField -> name & email is undefined  */}
            {props.nameField !== undefined ? <div className="name-field field">{props.nameField}</div> : ""}

            {props.field2 !== undefined ? <div className="field-2 field">{props.field2}</div> : ""}
            {props.field3 !== undefined ? <div className="field-3 field">{props.field3}</div> : ""}
            {props.field4 !== undefined ? <div className="field-4 field">{props.field4}</div> : ""}
            {props.field5 !== undefined ? <div className="field-5 field">{props.field5}</div> : ""}
            {props.field6 !== undefined ? <div className="field-6 field" onClick={showInfo} style={{cursor:'pointer'}}>{props.field6}</div> : ""}
            {props.field7 !== undefined ? <div className="field-7 field">{props.field7}</div> : ""}
        </div>
        <div className="line" style={{
            height: '2%',
            width: '100%',
            background: 'gray'
        }}></div>
    </div>
  )
}

export default List_Content_Card
