import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

export const Header = () => {
  return (
    <>
      <CssBaseline/>
      <Grid>
        <Typography  variant='h2' component='h2' align="center">
          WFSL
        </Typography>
      </Grid>
    </>
  )
}
