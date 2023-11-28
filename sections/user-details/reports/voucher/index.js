import React from 'react'
import VoucherForm from './voucher-form'
import VoucherTable from './voucher-table'
import { Box } from '@mui/material'

const Voucher = () => {
  return (
    <Box>
        <VoucherForm />
        <VoucherTable />
    </Box>
  )
}

export default Voucher