import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue'

import React from 'react';

const theme=createMuiTheme({
  palette:{
   primary:{ light: '#fce4ec',
    main: '#f8bbd0',
    dark: '#f48fb1',
    contrastText: '#fff',
    }
}  
})


export default theme;