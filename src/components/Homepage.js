import React from "react";
import { Typography, Link, AppBar, Box, Toolbar, Button } from '@mui/material';

const Homepage = () => {
    return ( 
        <div>
        <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                    <Button color="inherit" href="/register">Register</Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Button color="inherit" href="http://localhost:8080/login">Login</Button>
                    </Toolbar>
                </AppBar>
                </Box>

            <h2>
            Welcome to the Home Page!
            </h2>
        </div>
    )
}

export default Homepage;