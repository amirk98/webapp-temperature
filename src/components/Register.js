import React , { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Register=()=>{

    const navigate = useNavigate();

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const person = {firstName,lastName,email,password}
    
    const [registerError, setRegisterError]=useState(false);
    const [registerStatus, setRegisterStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterError(false);
        
        if(!firstName || !lastName || !email || !password) {
            setRegisterError(true)
        
        } else {
            navigate("/redirect");
            console.log(person)
            fetch("http://localhost:8080/api/v1/registration",{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(person)}
            )
            .then((response)=>{
                if (response.data.message) {
                    setRegisterStatus(response.data.message);
                } else {
                    setRegisterStatus(response.data[0].email);
                }
            })
        }
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Register</h2>
                </Grid>
                <TextField 
                label='First Name' 
                placeholder='Enter First Name' 
                value={firstName}
                error={registerError}
                onChange={(e)=>setFirstName(e.target.value)}
                fullWidth required/>

                <TextField 
                label='Last Name' 
                placeholder='Enter last name' 
                value={lastName}
                error={registerError}
                onChange={(e)=>setLastName(e.target.value)}
                fullWidth required/>

                <TextField 
                label='Email' 
                placeholder='Enter email' 
                value={email}
                error={registerError}
                onChange={(e)=>setEmail(e.target.value)}
                fullWidth required/>

                <TextField 
                label='Password' 
                placeholder='Enter password' 
                type='password' 
                value={password}
                error={registerError}
                onChange={(e)=>setPassword(e.target.value)}
                fullWidth required/>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>
                    Register
                    </Button>

                <Typography > Already registered?
                     <Link href="http://localhost:8080/login" >
                        Sign in
                </Link>
                </Typography>
                
                {registerError && (
                    <Alert severity="error">
                        Please Fill Every Field
                    </Alert>
                )}

            </Paper>
        </Grid>
    )
}

export default Register;