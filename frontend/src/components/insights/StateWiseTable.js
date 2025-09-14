import React, { useState } from 'react';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Box,
  Paper,
} from '@mui/material';

// Function to sort the data
const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const descendingComparator = (a, b, orderBy) => {
  if (orderBy === 'state') {
    return b[orderBy].localeCompare(a[orderBy]);
  }
  
  if (orderBy === 'totalProjects' || orderBy === 'totalCapacity') {
    return b[orderBy] - a[orderBy];
  }
  
  // For nested properties like '2017-18.projects'
  if (orderBy.includes('.')) {
    const [year, property] = orderBy.split('.');
    return b[year][property] - a[year][property];
  }
  
  return 0;
};

const StateWiseTable = ({ statewiseData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('totalProjects');
  
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  // Apply sorting and pagination
  const sortedData = statewiseData
    .slice()
    .sort(getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    
  return (
    <Card>
      <TableContainer component={Paper}>
        <Table aria-label="state-wise cold storage data table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'state'}
                  direction={orderBy === 'state' ? order : 'asc'}
                  onClick={() => handleRequestSort('state')}
                >
                  State
                </TableSortLabel>
              </TableCell>
              
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'totalProjects'}
                  direction={orderBy === 'totalProjects' ? order : 'asc'}
                  onClick={() => handleRequestSort('totalProjects')}
                >
                  Total Projects
                </TableSortLabel>
              </TableCell>
              
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'totalCapacity'}
                  direction={orderBy === 'totalCapacity' ? order : 'asc'}
                  onClick={() => handleRequestSort('totalCapacity')}
                >
                  Total Capacity
                </TableSortLabel>
              </TableCell>
              
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === '2017-18.projects'}
                  direction={orderBy === '2017-18.projects' ? order : 'asc'}
                  onClick={() => handleRequestSort('2017-18.projects')}
                >
                  2017-18 (Projects)
                </TableSortLabel>
              </TableCell>
              
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === '2018-19.projects'}
                  direction={orderBy === '2018-19.projects' ? order : 'asc'}
                  onClick={() => handleRequestSort('2018-19.projects')}
                >
                  2018-19 (Projects)
                </TableSortLabel>
              </TableCell>
              
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === '2019-20.projects'}
                  direction={orderBy === '2019-20.projects' ? order : 'asc'}
                  onClick={() => handleRequestSort('2019-20.projects')}
                >
                  2019-20 (Projects)
                </TableSortLabel>
              </TableCell>
              
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === '2020-21.projects'}
                  direction={orderBy === '2020-21.projects' ? order : 'asc'}
                  onClick={() => handleRequestSort('2020-21.projects')}
                >
                  2020-21 (Projects)
                </TableSortLabel>
              </TableCell>
              
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === '2021-22.projects'}
                  direction={orderBy === '2021-22.projects' ? order : 'asc'}
                  onClick={() => handleRequestSort('2021-22.projects')}
                >
                  2021-22 (Projects)
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.state} hover>
                <TableCell component="th" scope="row">
                  {row.state}
                </TableCell>
                <TableCell align="right">{row.totalProjects}</TableCell>
                <TableCell align="right">{row.totalCapacity.toLocaleString()}</TableCell>
                <TableCell align="right">{row['2017-18'].projects}</TableCell>
                <TableCell align="right">{row['2018-19'].projects}</TableCell>
                <TableCell align="right">{row['2019-20'].projects}</TableCell>
                <TableCell align="right">{row['2020-21'].projects}</TableCell>
                <TableCell align="right">{row['2021-22'].projects}</TableCell>
              </TableRow>
            ))}
            
            {/* Add a row to show the total */}
            <TableRow
              sx={{
                '& .MuiTableCell-root': {
                  fontWeight: 'bold',
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <TableCell>Total</TableCell>
              <TableCell align="right">
                {statewiseData.reduce((acc, curr) => acc + curr.totalProjects, 0)}
              </TableCell>
              <TableCell align="right">
                {statewiseData
                  .reduce((acc, curr) => acc + curr.totalCapacity, 0)
                  .toLocaleString()}
              </TableCell>
              <TableCell align="right">
                {statewiseData.reduce(
                  (acc, curr) => acc + curr['2017-18'].projects,
                  0
                )}
              </TableCell>
              <TableCell align="right">
                {statewiseData.reduce(
                  (acc, curr) => acc + curr['2018-19'].projects,
                  0
                )}
              </TableCell>
              <TableCell align="right">
                {statewiseData.reduce(
                  (acc, curr) => acc + curr['2019-20'].projects,
                  0
                )}
              </TableCell>
              <TableCell align="right">
                {statewiseData.reduce(
                  (acc, curr) => acc + curr['2020-21'].projects,
                  0
                )}
              </TableCell>
              <TableCell align="right">
                {statewiseData.reduce(
                  (acc, curr) => acc + curr['2021-22'].projects,
                  0
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={statewiseData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default StateWiseTable;
