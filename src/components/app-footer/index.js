import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    '& .about': {
      flexBasis: 100
    },
    '& .contact': {
      textAlign: 'left',
      flexGrow: 1,
      padding: '0 10px'
    },
    '& .copyright': {
      flexBasis: 150,
      textAlign: 'right'
    }
  },
});

export default function AppFooter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className="about">{props.data.about}</span>
      <span className="contact">{props.data.contact}</span>
      <span className="copyright">{props.data.copyright}</span>
    </div>
  );
}
