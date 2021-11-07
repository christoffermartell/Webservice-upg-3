import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import { UnPrivateRoute } from "./Components/Routes/UnPrivateRoute";
import { RegisterUser } from "./Components/Views/Register";
import { LoginPage } from "./Components/Views/Login";
import { PrivateRoute } from "./Components/Routes/PrivateRoute";
import Posts from "./Components/Views/Forum";
import { AllPosts } from "./Components/Views/AllPosts";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route exact path="/all" component={AllPosts} />
				<Route exact path="/register" component={RegisterUser} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/forum" component={Posts}></Route>
			</div>
		</Router>
	);
}

export default App;
