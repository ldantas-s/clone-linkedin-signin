import React from 'react';


const Button = ({ children }) => {
  return (
		<button
			className="
				w-full
				bg-blue-500
				p-5
				rounded
				text-white
				text-lg
				font-medium
				shadow-md
				hover:bg-blue-600
				transition-all
				duration-200
			"
		>
      { children }
    </button>
  );
}

export default Button;
