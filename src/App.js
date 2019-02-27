import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Grid, Typography } from '@material-ui/core';

import Todo from './prototypes/todo';

const Index = () => (
  <Grid container xs={12} sm={6} direction="column" spacing={32} style={{margin: 'auto'}}>
    <Grid item>
      <Typography variant="h4">UI prototypes for React experiments</Typography>
    </Grid>
    <Grid item>
      - <Link to="/todo">Todo layout</Link>
    </Grid>
  </Grid>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index}></Route>
          <Route path="/todo" exact component={Todo}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
