import React from 'react';

function Divider() {
	return (
		<div className="flex items-center text-gray-500 my-3">
			<span className="w-full h-px bg-gray-500 mr-2"></span> ou{' '}
			<span className="w-full h-px bg-gray-500 ml-2"></span>
		</div>
	);
}

export default Divider;
