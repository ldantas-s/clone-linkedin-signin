import React, {createContext, useContext, useState} from 'react'

const authContext = createContext();

export default function ProvideAuth({ children }) {
	const [user, setUser]= useState(null);

	return (
		<authContext.Provider value={{user, setUser}}>
			{ children }
		</authContext.Provider>
	)
}

export function useAuth() {
	return useContext(authContext);
}
