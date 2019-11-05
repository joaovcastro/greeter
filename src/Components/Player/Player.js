import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        width: 250,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 250,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


const Player = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Live from space album cover"
                    title="Live from space album cover"
                    height="250"
                    width="100%"
                    image="https://t2.genius.com/unsafe/912x0/https%3A%2F%2Fimages.genius.com%2F932f12c26d028188907e55cf5ff23f3e.600x600x1.jpg"
                    className={classes.cover}
                />
                <CardContent>
                    <Typography component="h5" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                    </Typography>
                </CardContent>
                <Divider />
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </CardActionArea>
        </Card>
    );
}

export default Player;