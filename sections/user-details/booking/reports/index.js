import { Box, Typography } from '@mui/material'
import React from 'react'
import Voucher from './voucher'
import AccountingReport from './accounting-report'
import Invoices from './invoices'
import Receipts from './receipts'

const Reports = () => {
  return (
    <Box>
        <Voucher />
        <AccountingReport />
        <Invoices />
        <Receipts />
    </Box>
  )
}

export default Reports