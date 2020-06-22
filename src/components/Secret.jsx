import React from 'react'
import {Icon, Box} from '@material-ui/core';

function Secret({secret, display}) {
    return (
        <Box m={2}>
            {
                display ? secret.map(s => <Icon style={{color: s.color, fontSize: "3rem"}}>stop_circle</Icon>)
                : secret.map(s => <Icon style={{color: "black", fontSize: "3rem"}}>stop_circle</Icon>)
            }
        </Box>
    )
}

export default Secret
