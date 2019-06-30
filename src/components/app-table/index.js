import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 530,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  }
}));


export default function AppTable(props) {
  const classes = useStyles();
  const rows = props.data.rows;

  return (
    <div className={classes.root}>
      <Typography variant="h6" color="inherit" className='title'>
        {props.data.title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {props.data.headers.map((header, index) =>
              <TableCell key={index}>{header.name}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {Object.keys(row).map((key, index) => (
                <TableCell key={index}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
