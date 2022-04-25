import React from 'react';
import { Typography, Link } from '@mui/material';

const AfterRegister=()=>{

    return (
        <div>
            <Typography > 
                <h3>Your account have successfully submitted.</h3>
                <h3> Please check your inbox to activate account.</h3>
                <Typography >
                    <h3><Link href="http://localhost:8080/login" >Sign in here</Link></h3>
                </Typography>
            </Typography>
        </div>
    )
}

export default AfterRegister;
