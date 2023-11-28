import { Box } from '@mui/material'
import React from 'react'
import ReceiptsTable from './receipts-table'
import ReceiptsForm from './receipts-form'

const Receipts = () => {
  return (
    <Box>
        <ReceiptsForm />
        <ReceiptsTable />
    </Box>
  )
}

export default Receipts