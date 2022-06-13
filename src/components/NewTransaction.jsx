import React from 'react'
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import { useState } from 'react';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    & > h4{
        margin-top: 30px;
    }
    & > div, & > button{
        width: 70%;
        margin: auto;
    }
`

const NewTransaction = ( { setTransactions } ) => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const addTransaction = () => {
    const transaction = {

      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: +amount
    }
    setTransactions(prevState => [transaction, ...prevState]);
  } 

  return (
    <Container>
        <Typography variant='h4' >New Transactions</Typography>
        <TextField variant='standard' label='Enter Expense'  onChange={(e) => setText(e.target.value)} />
        <TextField variant='standard' label='Enter Amount' helperText="for debit write ' - ' " onChange={(e) => setAmount(e.target.value)} />
        <Button variant='contained' onClick={() => addTransaction()} >Add Transaction</Button>
    </Container>
  )
}

export default NewTransaction