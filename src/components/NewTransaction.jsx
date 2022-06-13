import React from 'react'
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import { useState } from 'react';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2{
        margin: 40px auto 20px auto;
    }
    & > div, & > button{
        width: 70%;
        margin: auto;
        margin-bottom: 30px;
    }
`;

const Heading = styled(Typography)`
    font-size: 1.5rem;
    font-weight: bold;
`;

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
        <Heading variant='h2' >New Transactions :</Heading>
        <TextField variant='standard' label='Enter Expense'  onChange={(e) => setText(e.target.value)} />
        <TextField variant='standard' label='Enter Amount' helperText="for debit write ' - ' " onChange={(e) => setAmount(e.target.value)} />
        <Button variant='contained' onClick={() => addTransaction()} >Add Transaction</Button>
    </Container>
  )
}

export default NewTransaction