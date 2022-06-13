
import './App.css';
import { Typography, styled, Box } from '@mui/material';

import { useState } from 'react';

// Components:-
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  margin: 5px auto 30px auto;
  font-size: 50px;
  color: blue;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  display: flex;
  margin: auto;
  background-color: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  & > div {
    width: 50%;
    margin: auto;
    height: 70vh;
  }
`;

function App() {

  const [transactions, setTransactions] = useState([
    
    // {id: 1, text: 'burger', amount: -80},
    // {id: 2, text: 'salary', amount: 30000},
    // {id: 3, text: 'book', amount: -200},
    // {id: 4, text: 'bonus', amount: 40000}
  
  ])

  return (
    <div className="App">
      <Header variant='h1' >Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions = { transactions } />
          <ExpenseCard transactions = { transactions } />
          <NewTransaction setTransactions = {setTransactions} />
        </Box>
        <Box>
          <Transactions transactions = { transactions } setTransactions = {setTransactions} />
        </Box>
      </Component>
    </div>
  );
}

export default App;
