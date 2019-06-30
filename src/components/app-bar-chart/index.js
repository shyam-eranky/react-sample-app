import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const useStyles = makeStyles({
  root: {
    maxHeight: '400'
  },
});


export default function AppBarChart(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" color="inherit" className='title'>
        {props.data.title}
      </Typography>
      <Chart
        data={props.data.values}
      >
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          name="Point 1"
          valueField="point1"
          argumentField="team"
          color="#ffd700"
        />
        <BarSeries
          name="Point 2"
          valueField="point2"
          argumentField="team"
          color="#c0c0c0"
        />
        <Animation />
        <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
        <Stack />
      </Chart>
    </div>
  );
}
