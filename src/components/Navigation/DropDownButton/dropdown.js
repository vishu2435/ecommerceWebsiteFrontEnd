import React, { Component } from 'react'
import {withStyles, Menu,Button, MenuItem} from '@material-ui/core'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const StyledMenu=withStyles({
    paper:{
        border:"1px solid #d3d4d5" 
    }
})(props=>(
    <Menu
       elevation={0}
       getContentAnchorEl={null}
       anchorOrigin={{
           vertical:"bottom",
           horizontal:"left",
       }} 
       transformOrigin={{
           vertical:"top",
           horizontal:"left"
       }}
       {...props}
    />

))

const StyledMenuOptions=withStyles({
    root:{
        "&:focus":{
            backgroundColor:"red",
            "&: .MuiListItemIcon-root, & .MuiListItemText-primary":{
                color:"white"
            }
        }
        
    }
})(props=>(
    <MenuItem
        {...props}
    />
));


class DropDown extends Component{
    state={
        anchorEl:null
    }
    handleClick=(e)=>{
        this.setState({
            anchorEl:e.currentTarget
        })
    }
    handleClose=()=>{
        this.setState({
            anchorEl:null
        })
    }
    render(){
        return(
            <React.Fragment>
                 <Button
                    style={{marginLeft:"10px",textTransform:"capitalize"}}
                     aria-controls="customized-menus"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                    >
                        {this.props.userName}
                    </Button>
                    <StyledMenu
                         id="customized-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                       onClose={this.handleClose}
                        transitionDuration={100}
                        variant="selectedMenu"
                        autoFocus={false}
                        >
                              <StyledMenuOptions >
                        
                <ListItemText primary="Profile" />
                        </StyledMenuOptions>
                        
                   <StyledMenuOptions>
                        <ListItemText primary="Logout"/>
                   </StyledMenuOptions> 
                    </StyledMenu>
            </React.Fragment>
        )
    }
}

export default DropDown;