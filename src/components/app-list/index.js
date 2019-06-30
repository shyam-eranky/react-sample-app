import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '552px',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  }
}));

export default function AppList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" color="inherit" className='title'>
        {props.data.title}
      </Typography>
      <List>
        {props.data.items.map((item, index) =>
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={item.title}
                secondary={item.data}
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        )}
      </List>
    </div>
  );
}
