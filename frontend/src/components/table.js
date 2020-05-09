import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import http from '../services/tutorial.service'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 750,  
    marginTop: 100,
    marginLeft: 100,
  },

  textField:{
    margin: 100
  },

  button:{
    margin: 100
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const percentage = null

const rows = [
  createData(1,'Mouse HP 200', 40, 44),
  createData(2,'Smart TV LG 32', 450, 495),
  createData(3,'Notebook LG 3322', 1900, 2090),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Preço de custo</TableCell>
            <TableCell align="right">Preço de venda</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TextField className={classes.textField} value={percentage} type="number" maxlength="3" label="Margem de lucro (%)" />
      <Button className={classes.button} variant="contained">Atualizar preço</Button>
    </TableContainer>
  );
}