import React, { useEffect, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useInterval from '../hooks/useInterval';

import { Duration, intervalToDuration, Interval} from 'date-fns';


const theme = createTheme();

export default function Countdown() {
    const [duration, setDuration] = useState<Duration>();

    useEffect((() => {
    }), []);

    const enddate = 1672502400000;

    useInterval(() => {
        const internal: Interval = {
            start: new Date().getTime(),
            end: enddate,
        }
        const duration: Duration = intervalToDuration(internal);
        setDuration(duration);
    }, 1000);

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box 
                    sx={{
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography component='h3' color='#9B1B9B'>Countdown to 2023</Typography>

                    <Grid container sx={{
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Grid item xs sx={{
                            color: '#005281',
                        }}>
                            <Typography variant='body2'>{duration.months}</Typography>
                            <Typography variant='body2'>months</Typography>
                        </Grid>
                        <Grid item xs sx={{
                            color: '#F4389B',
                        }}>
                            <Typography variant='body2'>{duration.days}</Typography>
                            <Typography variant='body2'>days</Typography>
                        </Grid>
                        <Grid item xs sx={{
                            color: '#E1B873',
                        }}>
                            <Typography variant='body2'>{duration.hours}</Typography>
                            <Typography variant='body2'>hours</Typography>
                        </Grid>
                        <Grid item xs sx={{
                            color: '#1137F5',
                        }}>
                            <Typography variant='body2'>{duration.minutes}</Typography>
                            <Typography variant='body2'>minutes</Typography>
                        </Grid>
                        <Grid item xs sx={{
                            color: '#9D10EB',
                        }}>
                            <Typography variant='body2'>{duration.seconds}</Typography>
                            <Typography variant='body2'>seconds</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );

}