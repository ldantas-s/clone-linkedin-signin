import React, {createContext, useContext, useState} from 'react'

const authContext = createContext();

const userInfoSession = JSON.parse(sessionStorage.getItem('userInfoSession')) || null;


export default function ProvideAuth({ children }) {
	const [user, setUser]= useState(userInfoSession);

	return (
		<authContext.Provider value={{user, setUser}}>
			{ children }
		</authContext.Provider>
	)
}

export function useAuth() {
	return useContext(authContext);
}
