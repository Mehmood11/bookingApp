import { Box } from '@mui/material'
import React from 'react'
import AccountingReportForm from './accounting-report-form'
import AccountingReportTable from './accounting-report-table'

const AccountingReport = () => {
  return (
    <Box>
        <AccountingReportForm />
        <AccountingReportTable />
    </Box>
  )
}

export default AccountingReport;