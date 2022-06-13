import React from 'react'
import { Box, Card, CardContent, Typography, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    gap: 10px;
    & > div {
        flex: 1;
        padding: 10px;
    }
`
const CardInfo = styled(Typography)`
    font-size: 20px auto;
`; 

const ExpenseCard = ( { transactions } ) => {

    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*(-1)).toFixed(2);

  return (
    <Container>
        <CardContent>
            <Card>
                <CardInfo>Income :</CardInfo>
                <CardInfo style={{ color: "green" }} >₹{income}</CardInfo>
            </Card>
        </CardContent>
        <CardContent>
            <Card>
                <CardInfo>Expense :</CardInfo>
                <CardInfo style={{ color: "red" }} >₹{expense}</CardInfo>
            </Card>
        </CardContent>
    </Container>
  )
}

export default ExpenseCard