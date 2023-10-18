import React from 'react'
import { Route, Routes, BrowserRouter  } from 'react-router-dom'
import STUDENT_HOME from '../2_Pages/2_1_Home_Page/Student_Home' 
import STUDENT_COMPANY_PAGE from '../2_Pages/2_2_Company_Page/Student_Company_Page'
import STUDENT_COMPANY_INFO from '../2_Pages/2_2_Company_Page/Company_Info_Page/Company_Info_Page'
import STUDENT_STUDENTS_PAGE from '../2_Pages/2_3_Students_Page/Student_Students_Page'
import STUDENT_INFO_PAGE from '../2_Pages/2_3_Students_Page/Student_Info_Page/Student_Info_Page'
import STUDENT_APPLIED_PAGE from '../2_Pages/2_4_Applied_Page/Applied_Page'
import STUDENT_PLACED_PAGE from '../2_Pages/2_5_Placed_Page/Placed_Page'
import STUDENT_NOTICE_PAGE from '../2_Pages/2_6_Notice_Page/Notice_Page'
import STUDENT_PROFILE_PAGE from '../2_Pages/2_7_Profile_Page/Student_Profile_Page'
import NavBarMain from '../3_Components/SideBar/NavBarMain'
import STUDENT_LOGIN_PAGE from './StudentLoginPage'
import ADMIN_LOGIN_PAGE from '../../Admin Side/1_Login/AdminLoginPage'

const login = () => {
  return (
    <BrowserRouter basename='/SARTHI_Placement_Portal'>

        {/* <Routes>
            <Route path='/' element={<NavBarMain/>}>
            <Route path='home-page' element={<STUDENT_HOME />}></Route>
            <Route path='company-page' element={<STUDENT_COMPANY_PAGE />}></Route>
            <Route path='student-page' element={<STUDENT_STUDENTS_PAGE />}></Route>
            <Route path='profile-page' element={<STUDENT_PROFILE_PAGE />}></Route>
            </Route>
        </Routes> */}
        <Routes>
            {/* <Route path='/' element={}></Route> */}
            <Route path='student-login' element={<STUDENT_LOGIN_PAGE />}></Route>
            <Route path='admin-login' element={<ADMIN_LOGIN_PAGE />}></Route>
            <Route path='/' element={<NavBarMain/>}>
              <Route index element={<STUDENT_HOME />}></Route>
              <Route path='company-page' element={<STUDENT_COMPANY_PAGE />}></Route>
              <Route path='/company-page/company-info' element={<STUDENT_COMPANY_INFO/>}></Route>
              <Route path='student-page' element={<STUDENT_STUDENTS_PAGE />}></Route>
              <Route path='/student-page/student-info' element={<STUDENT_INFO_PAGE/>}></Route>
              <Route path='applied-page' element={<STUDENT_APPLIED_PAGE />}></Route>
              <Route path='placed-page' element={<STUDENT_PLACED_PAGE />}></Route>
              <Route path='notice-page' element={<STUDENT_NOTICE_PAGE />}></Route>
              <Route path='profile-page' element={<STUDENT_PROFILE_PAGE />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default login