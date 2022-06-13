import React from 'react'
import { Box, Typography, Divider, List, styled } from '@mui/material'

import Transaction from './Transaction'

const Heading = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Transactions = ( { transactions, setTransactions } ) => {
  return (
    <Box>
      <Heading variant='h2'>Transactions History :</Heading>
      <Divider style={{ marginTop: '10px', width: '97%' }} />
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
