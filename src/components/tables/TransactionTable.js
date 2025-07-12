import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const transactions = [
  { id: 1, name: 'Amazon Purchase', date: '2025-05-01', price: '$49.99', status: 'Completed' },
  { id: 2, name: 'Myntra Order', date: '2025-05-02', price: '$29.99', status: 'Processing' },
  { id: 3, name: 'Flipkart Sale', date: '2025-05-03', price: '$99.99', status: 'Completed' }
];

export default function TransactionTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell><TableCell>Date</TableCell><TableCell>Price</TableCell><TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(t => (
            <TableRow key={t.id}>
              <TableCell>{t.name}</TableCell><TableCell>{t.date}</TableCell><TableCell>{t.price}</TableCell><TableCell>{t.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
