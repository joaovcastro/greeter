import React from 'react';
import Grid from '@material-ui/core/Grid';
import Clock from './Components/Clock';
import Player from './Components/Player';
import PomodoroTimer from './Components/PomodoroTimer';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Player />
          </Grid>



          <Grid item>
            <PomodoroTimer />
          </Grid>

          <Grid item>
            <h1>Weather</h1>
          </Grid>


        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Clock />
          </Grid>
        </Grid>

      </header>
    </div>
  );
}

export default App;