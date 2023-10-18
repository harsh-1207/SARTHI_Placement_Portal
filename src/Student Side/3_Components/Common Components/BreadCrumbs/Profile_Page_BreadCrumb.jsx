import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import './BreadCrumbs.css'
import { useNavigate } from 'react-router';
// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function CustomSeparator() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="white" onClick={handleClick} style={{backgroundColor:'transparent', cursor:"pointer"}}>
      Home
    </Link>,
    <Typography key="3" color="gray" style={{background:'transparent'}}>
        Student Profile
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
        </Breadcrumbs>
    </Stack>
  );
}