import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@mui/icons-material';

const RecentTransactions = () => {
  const transactions = [
    {
      id: 'TR-7845',
      date: 'Oct 12, 2023',
      description: 'Payment Received - Himalaya Fresh Foods',
      amount: 25000,
      type: 'credit',
    },
    {
      id: 'TR-7839',
      date: 'Oct 10, 2023',
      description: 'Fertilizer Purchase - AgriSupplies',
      amount: 12500,
      type: 'debit',
    },
    {
      id: 'TR-7834',
      date: 'Oct 05, 2023',
      description: 'Payment Received - Farm2Home',
      amount: 18000,
      type: 'credit',
    },
    {
      id: 'TR-7828',
      date: 'Oct 01, 2023',
      description: 'Equipment Rental - Tractor',
      amount: 8500,
      type: 'debit',
    },
    {
      id: 'TR-7820',
      date: 'Sep 28, 2023',
      description: 'Farmigo Platform Fee',
      amount: 1500,
      type: 'debit',
    },
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title="Recent Transactions"
        subheader="Your latest financial activities"
      />
      <Divider />
      <CardContent>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <Typography variant="body2">{transaction.date}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{transaction.description}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                      {transaction.type === 'credit' ? (
                        <ArrowUpwardIcon fontSize="small" color="success" sx={{ mr: 0.5 }} />
                      ) : (
                        <ArrowDownwardIcon fontSize="small" color="error" sx={{ mr: 0.5 }} />
                      )}
                      <Typography
                        variant="body2"
                        color={transaction.type === 'credit' ? 'success.main' : 'error.main'}
                      >
                        ₹{transaction.amount.toLocaleString()}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
