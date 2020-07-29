import React from 'react'
import { withStyles,makeStyles,Grid,FormControlLabel,Container, CssBaseline, Typography, TextField, Checkbox, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'

const useStyles=theme=>({
    paper:{
        marginTop:theme.spacing(8),
        display: 'flex',
        flexDirection:'column',
        alignItems:'center'
        
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(1)
    },
    submit:{
        margin:theme.spacing(3,0,2)
    }
});

const signIn=(props)=>{
   
   
    const {classes}=props;
   return(
    <Container component="main" maxWidth='xs'>
        <CssBaseline/>
        <div className={classes.paper}>
            <Typography variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    autoComplete="emial"
                    name="email"
                    onChange={props.handleChange}
                 />
                 <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     type="password"
                     onChange={props.handleChange}

                 />
                 <FormControlLabel
                     control={<Checkbox value="remember" color="primary"/>}
                />
                <Button
                
                fullWidth
                onClick={props.handleClick}
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
                <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
                </Link>
                </Grid>
                <Grid item>
                 <Link href="#" variant="body2">
                   {"Don't have an account? Sign Up"}
                 </Link>
                </Grid>
            </Grid>
            </form>
        </div>

    </Container>
   )
   
}


export default withStyles(useStyles)(signIn)