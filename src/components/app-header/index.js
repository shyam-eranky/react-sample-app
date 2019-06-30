import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import scoreLogo from '../../../public/images/score.jpg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& .logo': {
      flexBasis: 60,
      margin: 10,
      width: 60,
      height: 60
    },
    '& .title': {
      flexGrow: 1,
      padding: '0 10px',
      textAlign: 'center'
    },
    '& .links': {
      flexBasis: 100,
      textAlign: 'right',
      '& .link': {
        display: 'block',
        margin: 5
      }
    }
  },
});

export default function AppHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Logo" src={scoreLogo} className='logo' />
      <Typography variant="h5" color="inherit" className='title'>
        {props.data.title}
      </Typography>
      <div className='links'>
        {props.data.links.map(link =>
          <Link key={link.name} href={link.link} className='link'>
            {link.name}
          </Link>
        )}
      </div>
    </div>
  );
}
