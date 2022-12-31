import React from 'react';
import './Footer.css';
import { PlayCircleFilled, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumCover" src="https://i.discogs.com/4VuWl7Ypy_MYVBUzx2d-Zo-zgTWGtylDdcvl39M7VBc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDA4/MzUtMTI5MTAzNDU0/Mi5qcGVn.jpeg" alt="" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__outside" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleFilled fontSize="large" className="footer__icon" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__outside" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider className="footer__slider" aria-label="Volume" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;