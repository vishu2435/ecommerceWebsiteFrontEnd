import React from 'react';
import {withStyles,theme, Card,Box,CardActionArea, CardMedia,CardContent,CardHeader,IconButton, CardActions, Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import classes from './onecard.module.css'


const StyledCard=withStyles(theme=>({
        root:{
                width:"100%",
                height:"100%",
                borderRadius:"0px",
                [theme.breakpoints.up("md")]:{
                        borderRadius:"9px"
                }
        }
}))(props=>(<Card {...props}/>))


export default function OneCard(props){
   
  
    var url=`http://localhost:1080${props.avatarSrc}`
    var jumptToLink="/product/"+props.id;
var title=props.title;
if(title.length>37){
        title=title.slice(0,37)
        title+="..."
}
   
    return(
          <StyledCard>
              <Link to={jumptToLink} style={{textDecoration:"none",color:"inherit"}}>
             <CardActionArea>

                     <CardMedia
                         style={{paddingTop:"40%",paddingBottom:"50%"}}        
                         image={url}
                         title="Paella dish"
                      />

                    <CardContent style={{paddingBottom:0}}>
                          <Typography variant="h6" style={{fontSize:10}}>{title}</Typography>   
                          <Typography variant="subtitle1" >{props.price}</Typography>  
                     </CardContent>
              </CardActionArea></Link>
              <CardActions style={{padding:0}}>
                      <Box p={1} display="flex" flexDirection="row">
                      <Box p={1} ><Button size="small" onClick={props.addToCart} style={{fontSize:"10px"}} variant="outlined">Add To Cart</Button></Box>
                      <Box p={1}><Button size="small" variant="outlined">Buy Now</Button></Box>
                      </Box>
              </CardActions>

      </StyledCard>
        )
}

