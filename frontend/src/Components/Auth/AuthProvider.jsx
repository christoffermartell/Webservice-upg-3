import React, { createContext, useState } from "react";
export const Context = createContext();

const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [author, setAuthor] = useState("");
//	const [isLoaded, setIsLoaded] = useState(false);
	const [token, setToken] = useState("");

	return (
		<div>
				<Context.Provider
				value={{
					author,
					setAuthor,
					token,
					setToken,
					isAuthenticated,
					setIsAuthenticated
				}}
			>
				{children}
				</Context.Provider>
			)
		</div>
	);
};
export default AuthProvider;