import React from 'react'

import { Rating } from 'primereact/rating';
import { yellow } from '@mui/material/colors';
        

export default function Rate({value}) {
  return (
    <Rating value={value} readOnly cancel={false} style={{color:'#FDA11C'}} />

  )
}
