import React,{useState} from "react";
import {Form, Button,Card} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setTokenAC} from '../../redux/reducers/AuthReducer/AuthReducer'


const Login = () => {
    const [user, setUser] = useState ({
        email:'',
        password:''
    });

    const {email,password} = user;
 const dispatch  = useDispatch()
    const history = useHistory()
    const onChange = e =>setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        dispatch(setTokenAC("TOKEN"))
    };

    return(
        <Card>
        <Form  className="rounded p-4 p-sm-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
          placeholder="Enter email"
          value={email}
          name ="email"
          onChange={onChange}
          required
          />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          placeholder="Password" 
          value={password}
          name ="password"
          onChange={onChange}
          required
          />
        </Form.Group>
        <Button variant="primary" value="Login" 
        onClick={onSubmit}
        >
          Login
        </Button>
      </Form>
        </Card>
        

    );

};
 export default Login