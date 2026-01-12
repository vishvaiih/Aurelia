import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const navigation = useNavigate()
  return (
    <>
     
      <Typography onClick = {() => navigation("/signup")}>signup</Typography>
    </>
  )
}

export default LogIn
