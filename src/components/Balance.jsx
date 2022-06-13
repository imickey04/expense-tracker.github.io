import React from 'react'
import { Box, Typography, styled } from '@mui/material';

const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 10px;
`;

const Balance = ( { transactions } ) => {

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
    const color = total > 0 ? 'green' : 'red';

  return (
    <Box>
        <BalanceText style={{ color: `${color}` }} >Balance : ₹{total}</BalanceText>
    </Box>
  )
}

export default Balance