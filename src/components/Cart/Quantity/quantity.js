import React from 'react'
import { FormControl, InputLabel, Select } from '@material-ui/core'
import { getThemeProps } from '@material-ui/styles'


const qty=(props)=>{
    var arr=[]
    for(let i=0;i<11;i++){
        arr.push(<p key={i} value={i}>{i}</p>)
    }

    return(
        <React.Fragment>
            <FormControl>
                <InputLabel  htmlFor="filled-age-native-simple">qty</InputLabel>
                <Select
                variant="filled"
                labelId="quantity"
                value={props.qty}
                onChange={props.changeQuantity}
                inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
                >
                   {arr.map(p=>{return p})}
                </Select>
            </FormControl>
        </React.Fragment>
    )   
}




export default qty



