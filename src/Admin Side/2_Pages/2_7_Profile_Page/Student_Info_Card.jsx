import React from 'react'
import Student_Info_SubCard from './Student_Info_SubCard.jsx'

const Student_Info_Card = () => {
  return (
    <>
      <div className="info-card-wrapper" style={{
          height: '100%',
          width: '100%',
          background: 'transparent',
      }}>
          <div className="heading" style={{
              height: '5%',
              width: '100%',
              fontSize: '2rem',
              color: 'pink',
              fontWeight: 'bold',
              background: 'transparent'
          }}>
            STUDENT INFORMATION
          </div>

          <div className="student_info_wrapper" style={{
              height: '85%',
              width: '100%',
              background: 'transparent',
              overflow: 'auto'
          }}>
              <Student_Info_SubCard 
                title="NAME"
                info="Harsh Bisht"
              />
              <Student_Info_SubCard 
                title="USN"
                info="2000321540026"
              />
              <Student_Info_SubCard 
                title="EMAIL"
                info="Harshbisht@gmail.com"
              />
              <Student_Info_SubCard 
                title="BRANCH & SECTION"
                info="CSDS A"
              />
              <Student_Info_SubCard 
                title="YEAR"
                info="4"
              />
              <Student_Info_SubCard 
                title="CGPA"
                info="8"
              />
              <Student_Info_SubCard 
                title="10TH %"
                info="90.5"
              />
              <Student_Info_SubCard 
                title="12TH %"
                info="85.6"
              />
              <Student_Info_SubCard 
                title="BACKLOGS"
                info="0"
              />
              {/* <Student_Info_SubCard 
                title="ELIGIBLE"
                info="Yes"
              /> */}
              <Student_Info_SubCard 
                title="PLACED"
                info="Yes"
              />
              <Student_Info_SubCard 
                title="PACKAGE"
                info="500000"
              />
          </div>
          <div className="buttons_wrapper" style={{
              height: '10%',
              width: '100%',
              padding: '0 1rem',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '15px'
          }}>
              <div className="change_pswd" style={{
                  height: '50%',
                  width: '30%',
                  background: 'pink',
                  borderRadius: '10px',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

              }}>Change Password</div>
              <div className="logout" style={{
                  height: '50%',
                  width: '12%',
                  background: 'pink',
                  borderRadius: '10px',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

              }}>Logout</div>
          </div>

      </div>
    </>
  )
}

export default Student_Info_Card
