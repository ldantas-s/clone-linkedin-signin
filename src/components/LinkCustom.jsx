import React from 'react';
import { Link } from 'react-router-dom';

function LinkCustom({ children, toLink }) {
	return (
		<Link
			className="text-blue-500 font-bold hover:text-blue-700 hover:underline transition-colors duration-100"
			to={toLink}
		>
			{children}
		</Link>
	);
}

export default LinkCustom;
