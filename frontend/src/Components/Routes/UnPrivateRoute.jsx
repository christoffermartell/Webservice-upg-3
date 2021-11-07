import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Auth/AuthProvider";

export const UnPrivateRoute = ({component: Component, ...rest}) =>{
    const {isAuthenticated} = useContext(Context);

    return (
        <Route {...rest}
                    render={(props)=>{
                        if(isAuthenticated){
                            return (
                                <Redirect to={{
                                    pathname:"/home",
                                    state: {from:props.location}
                                }} ></Redirect>
                            )
                        }
                        return <Component {...props} />;
                    }} >

        </Route>
    )
}