import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../Auth/AuthService";
import { Context } from "../Auth/AuthProvider";

export const RegisterUser = () => {
	const [user, setUser] = useState({ username: "", password: "" });
	const {setAuthor} = useContext(Context);
	let history = useHistory();

	const changeUserData = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	

	const registerNewUser = async (e) => {
		e.preventDefault();
		const data = await AuthService.register(user);
		//byt ut mot något vettigt!!console.log(data);
		if (data) {

           setAuthor(user.username);
            alert("Successfully created user " + JSON.stringify(user))
            history.push("/login");

		}else {
            alert("Something went wrong")
        }
            
            
        
	};

	return (
		<div style={{ maxWidth: "60rem", textAlign: "center", margin: "auto" }}>
			<h1>Register</h1>
			<form onSubmit={registerNewUser}>
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