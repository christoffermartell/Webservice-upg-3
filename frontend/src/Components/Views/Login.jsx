import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Auth/AuthProvider";
import AuthService from "../Auth/AuthService";
 


export const LoginPage = () => {
    const {setIsAuthenticated, setToken} = useContext(Context);
	const [user, setUser] = useState({ username: "", password: "" });
	//const [author, setAuthor] = useState({username: ""});
    
   
	let history = useHistory();

	const changeUserData = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });

	};

	const loginUser = async (e) => {
		e.preventDefault();
		const token = await AuthService.login(user);
	
		if (token) {
			setIsAuthenticated(true);
            setToken(token);
            alert("Successfully loggin ")
            console.log("Token has been created " + token);
			history.push("/forum");
		}else{
            alert("Something went wrong")
        }
		
	};


	return (
		<div style={{ maxWidth: "60rem", textAlign: "center", margin: "auto" }}>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={changeUserData}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={changeUserData}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
