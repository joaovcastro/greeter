import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const Timer = ({ seconds }) => {
    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    return (
        <div>
            <h1>{timeLeft}</h1>
        </div>
    );
}

const PomodoroTimer = () => {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
                <Timer seconds={90} />
            </Grid>
            <Grid item md={6}>
                <Button variant="contained" color="primary" onClick={() => false}>
                    Start
                </Button>
            </Grid>
            <Grid item md={6}>
                <Button variant="contained" color="secondary" onClick={() => false}>
                    Stop
                </Button>
            </Grid>
        </Grid>
    );
}

export default PomodoroTimer;
