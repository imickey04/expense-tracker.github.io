import React from 'react'
import { ListItem, ListItemText, styled, ListItemIcon } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Detail = styled(ListItem)`
    margin-top: 10px
`;

const Transaction = ( { transaction, transactions, setTransactions } ) => {

    const color = transaction.amount > 0 ? 'green' : 'red';

    const deleteTransaction = (id) => {
      setTransactions(transactions.filter(transaction => transaction.id !== id))
    }

  return (
    <Detail style={{ background: `${color}`, color: '#fff' }} >
      <ListItemIcon>
        <DeleteForeverIcon style={{ cursor: 'pointer' }} onClick = {() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
  )
}

export default Transaction;