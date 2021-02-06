import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Pages
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home.jsx';

// Context
import ProvideAuth, { useAuth } from './context/authContext.js';
import NotFound from './pages/NotFound.jsx';

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
					<Route path="*">
						<NotFound />
					</Route>
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
			render={({ location }) => auth.user?.uid ? ( children ) : ( <Redirect to={{ pathname: '/', state: { from: location } }} /> ) }
		/>
	)

}

export default Routes;
