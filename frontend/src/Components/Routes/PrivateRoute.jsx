import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Auth/AuthProvider";

export const PrivateRoute = ({component: Component, ...rest}) =>{
    const {isAuthenticated} = useContext(Context);

    return (
        <Route {...rest}
                    render={(props)=>{
                        if(!isAuthenticated){
                            return (
                                <Redirect to={{
                                    pathname:"/login",
                                    state: {from:props.location},
                                }} 
                                ></Redirect>
                            )
                        }
                        return(
                            <Component {...props} />
                        )
                    }} />

        
    )
}