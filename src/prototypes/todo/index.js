import React from 'react';
import { Button, Checkbox, Grid, TextField } from '@material-ui/core';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const styles = (theme) => ({
  main: {
    margin: theme.spacing.unit * 3
  },
  autoMargin: {
    margin: 'auto'
  },
  filterSelect: {
    minWidth: 150
  },
  task: {
    padding: 5
  },
  taskInput: {
    fontSize: theme.spacing.unit * 2,
    background: '#fff'
  },
  titleh6: {
    fontSize: theme.spacing.unit * 2.5,
    fontWeight: 400
  }
});

const Todo = (props) => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Grid container className={classes.autoMargin} direction="column" spacing={8} sm={12} md={6} xl={4}>
        <Grid item component="form">
          <TextField className={classes.taskInput} fullWidth variant="outlined" label="Enter new task" margin="normal" />
        </Grid>
        <Grid container justify="flex-end" alignItems="flex-end" spacing={8}>
          <Grid item>
            <Button variant="outlined" color="secondary">Archive all completed</Button>
          </Grid>
          <Grid item>
            <FormControl className={classes.filterSelect}>
              <InputLabel>Filter by status</InputLabel>
              <Select value="none" variant="filled">
                <MenuItem value="none"><em>All Tasks</em></MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <List>
            <ListItem className={classes.task} divider button>
              <Checkbox checked tabIndex={-1} disableRipple />
              <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></ListItemText>
              <Button size="small" color="secondary">Archive</Button>
            </ListItem>
            <ListItem className={classes.task} divider button>
              <Checkbox checked={false} tabIndex={-1} disableRipple />
              <ListItemText primary="In consectetur maximus mi nec condimentum"></ListItemText>
              <Button size="small">Delete</Button>
            </ListItem>
            <ListItem className={classes.task} divider button>
              <Checkbox checked={false} tabIndex={-1} disableRipple />
              <ListItemText primary="Nunc porta mauris a enim egestas, sit amet volutpat dolor lobortis"></ListItemText>
              <Button size="small">Delete</Button>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography classes={{ h6: classes.titleh6 }} variant="h6">Archived tasks</Typography>
          <List>
            <ListItem className={classes.task} divider button>
              <Checkbox checked tabIndex={-1} disableRipple disabled />
              <ListItemText primary="Integer mollis vitae lorem eu congue"></ListItemText>
              <Button size="small" color="secondary">Restore</Button>
              <Button size="small">Delete</Button>
            </ListItem>
            <ListItem className={classes.task} divider button>
              <Checkbox checked tabIndex={-1} disableRipple disabled />
              <ListItemText primary="Lorem ipsum dolor sit"></ListItemText>
              <Button size="small" color="secondary">Restore</Button>
              <Button size="small">Delete</Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </main>
  )
};

export default withStyles(styles)(Todo);
