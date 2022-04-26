import React from "react";
import { Typography, Button, Stack, Link } from '@mui/material';

const Homepage = () => {
    return ( 
        <div style={{
             backgroundImage: `url("https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdCUyMGNvbG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80")` 
          }}>
            <h2><br></br>
                Welcome to 
            </h2><br></br>
                <h1>Temperature Prediction Web App</h1>
            <br></br>
            <h8><Link href="https://github.com/amirk98" underline="none" color="inherit">by Muhammad Amir</Link></h8>
            <br></br><br></br><br></br>
                
            <Typography align='center'>
                <Stack direction="row" spacing={5}>
                    <Button variant="contained" size="large" color="inherit" href="/register">
                        Register</Button>
                    <Button variant="contained" size="large" color="inherit" href="http://localhost:8080/login">
                        Login</Button>
                </Stack>
            </Typography>
        </div>
    )
}

export default Homepage;