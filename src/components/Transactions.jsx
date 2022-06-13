import React from 'react'
import { Box, Typography, Divider, List } from '@mui/material'

import Transaction from './Transaction'

const Transactions = ( { transactions, setTransactions } ) => {
  return (
    <Box>
      <Typography variant='h4'>Transactions History</Typography>
      <Divider style={{ marginTop: '10px' }} />
      <List>
        {
          transactions.map(transaction => (
            <Transaction transaction={transaction} transactions={transactions} setTransactions = {setTransactions} />
          ))
        }
      </List>
    </Box>
  )
}

export default Transactions;