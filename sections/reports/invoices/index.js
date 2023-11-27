import { Box } from '@mui/material'
import React from 'react'
import InvoicesForm from './invoices-form'
import InvoicesTable from './invoices-table'

const Invoices = () => {
  return (
    <Box>
        <InvoicesForm />
        <InvoicesTable />
    </Box>
  )
}

export default Invoices