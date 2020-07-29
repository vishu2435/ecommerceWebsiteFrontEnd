import React,{useEffect,useState} from 'react';
import { makeStyles,ThemeProvider,fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideBar/Sidebar'
import theme from './theme';
import cls from './header.module.css'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DropDown from './DropDownButton/dropdown'
import Collapse from '@material-ui/core/Collapse';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const style={
    flex:1,
    marginLeft:"20px",
    textDecoration:"none"
    
}

const useStyles = makeStyles((theme) => ({
root: {
  flexGrow: 1,
},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  shopButton:{
    flex:1,
    marginLeft:"0px",
    textDecoration:"none",
    [theme.breakpoints.up('sm')]: {
      marginLeft:"20px",
      
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 8,
    width: '400px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  forSmallDevices:{
    display:"inline-block",
    margin:0,
    [theme.breakpoints.up('md')]:{
      display:"none"
    }
  },
  forSmallDevicesInvisible:{
    display:"none",
    margin:0,
    [theme.breakpoints.up('md')]:{
      display:"inline-block"
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width',{duration:"400"}),
    // width: '8ch',
    
    [theme.breakpoints.up('sm')]: {
      width: '11ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();
    console.log(classes);
    console.log("From Header.jsx ",props.logInstate)

  const [state,setState]=useState({
    isLoggedIn:false
  })
  if(props.logInstate){

  }
  const handleSideBarLogin=()=>{
    props.history.push('/login')
  }
  return (
    <React.Fragment>

    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
           <Toolbar style={{padding:0,color:"black"}}> 
          <div className={classes.forSmallDevices}>
            <SideDrawer logInState={props.logInstate} userName={props.userName} handleLogin={handleSideBarLogin} />
            </div>
          
          <Typography variant="h6" className={classes.shopButton} >
            <Link to="/">
            Shop
            </Link>
          </Typography>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase onChange={props.onChange} value={props.searchValue} placeholder="search..." 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          {
            props.logInstate?
            <div className={classes.forSmallDevicesInvisible}>
            <DropDown userName={props.userName}/>  
            </div>
            :
            <Button className={classes.forSmallDevicesInvisible} color="inherit"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Login</Link></Button>
          }
          <Link to="/cart"> 
    
          <Button>
           <ShoppingCartIcon/>
          
           </Button>
           </Link>
         </Toolbar>   
      </AppBar>
    
    </ThemeProvider>
    {/* </div> */}
    
    </React.Fragment>
  );
}

export default ButtonAppBar