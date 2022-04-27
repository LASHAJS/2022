import React from "react";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react"
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Auth from './components/Auth/login'
import "./styles.css";
import {Switch} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";


const App = () => {

    const isAuth = localStorage.getItem("jwt")
    const isLoading = useSelector((state => state.authReducer.isLoading))
    if (isLoading){
        return <div>Loading...</div>
    }
        return (
            <div className="App">
                <ToastContainer/>
                <Navbar/>
                {!isAuth
                    ? <Switch>
                        <Route exact path="/Auth" component={() => <Auth/>}/>
                        <Redirect to="/Auth"/>
                    </Switch>
                    : <Switch>
                        <Route exact path="/" component={() => <Home/>}/>
                        <Route exact path="/add" component={() => <AddPost/>}/>
                        <Route exact path="/edit/:id" component={() => <EditContact/>}/>
                        <Redirect to="/"/>
                    </Switch>
                }
            </div>
        );
};
export default App;
