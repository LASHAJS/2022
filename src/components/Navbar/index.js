import React from "react";
import { Link } from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import { useHistory ,Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux'
import {setTokenAC} from "../../redux/reducers/AuthReducer/AuthReducer"
const Navbar = () => {

 const history = useHistory()

 const isAuth = useSelector((state => state.authReducer.Token))
const dispatch = useDispatch()
  const handleLougOut = () => {
    dispatch(setTokenAC(null))
    
  }
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark d-flex justify-content-between">
        <Link to={"/"} className="navbar-brand ml-5">
          React Redux
        </Link>
{isAuth && (
<Form>
<Button onClick={handleLougOut} >
    logout
</Button>
</Form>
)}
       

      </nav>
    </div>
  );
};

export default Navbar;
