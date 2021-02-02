import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Pages
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home.jsx';

// Context
import ProvideAuth, { useAuth } from './context/authContext.js';

const Routes = () => {
  return (
		<ProvideAuth>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<PrivateRoute path="/home">
						<Home />
					</PrivateRoute>
				</Switch>
			</BrowserRouter>
		</ProvideAuth>
  );
}

function PrivateRoute({ children, ...rest }) {
	const auth = useAuth();
	return (
		<Route
			{...rest}
			render={({ location }) => auth.user ? ( children ) : ( <Redirect to={{ pathname: '/', state: { from: location } }} /> ) }
		/>
	)

}

export default Routes;
