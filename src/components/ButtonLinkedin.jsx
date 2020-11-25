import React from 'react';

function ButtonLinkedin({ children, type = 'button', ...rest }) {
	return (
		<button
			{...rest}
			type={type}
			className="
				w-full
				bg-blue-600
				p-5
				rounded
				text-white
				text-lg
				font-medium
				shadow-md
				hover:bg-blue-500
				transition-all
				duration-200
			"
		>
			{children}
		</button>
	);
}

export default ButtonLinkedin;
