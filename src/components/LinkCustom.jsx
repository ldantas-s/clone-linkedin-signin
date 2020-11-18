import React from 'react';
import { Link } from 'react-router-dom';


function LinkCustom({children, toLink}) {
	return <Link className="text-blue-500 font-medium" to={toLink}>{children}</Link>;
}

export default LinkCustom;
