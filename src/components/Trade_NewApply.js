import React from 'react'
import ApplyForm from './ApplyForm'
import TimeLineUpdate from './TimeLineUpdate'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function Trade_NewApply() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
     <Stack direction="row" spacing={1}>
        <Item elevation={0} ><TimeLineUpdate /></Item>
        {/* <Item elevation={0} className='w-11/12'><ApplyForm /></Item> */}
        <ApplyForm/>
        {/* <Item>Item 3</Item> */}
      </Stack>
    
    
    </>
  )
}

export default Trade_NewApply