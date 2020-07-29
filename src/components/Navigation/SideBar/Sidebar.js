import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withStyles } from "@material-ui/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const StyledButton=withStyles({
    root:{
        width:"fit-content",
        paddingRight:"0px",
//        paddingLeft:"0px"

    }
})(props=>(<Button {...props}/>))

const useStyles=makeStyles({
    list:{
        width:"250px"
    }
})

export default function TemproraryDrawer(props){
    const classes=useStyles();
    var [openState,setState]=useState({
        open:false
    })
    const toggleDrawer=(isOpen)=>{
        setState({open:isOpen})
    }
    const list=(<div className={classes.list}
                role="presentation"
                onClick={()=>toggleDrawer(false)}
                >
                 <List>
                 {
                   props.logInState?
                   <ListItem  button >
                        <ListItemIcon>
                  <AccountCircleIcon/>            
            </ListItemIcon>
            <ListItemText primary={props.userName} />
          </ListItem>:

                 
                 <ListItem onClick={props.handleLogin} button >
            <ListItemIcon>
                  <AccountCircleIcon/>            
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          }
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
                </div>)

                return(
                    <div>
                        <StyledButton  onClick={()=>toggleDrawer(true)}>
                            <MenuIcon/>
                        </StyledButton>
                        <Drawer
                        anchor="left"
                        open={openState["open"]}
                        onClose={()=>toggleDrawer(false)}
                        >
                            {list}
                        </Drawer>
                    </div>
                )

}

