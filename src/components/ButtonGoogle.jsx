import React from 'react';
import { FcGoogle } from 'react-icons/fc';


function ButtonGoogle({ children }) {
  return (
		<div className="">
					<button
						className="
							flex
							justify-center
							w-full
							p-5
							border-2
							border-gray-700
							text-gray-700
							rounded
							font-medium
							hover:shadow
						"
					><FcGoogle className="mx-3" size={24} />Entrar com o Google</button>
        </div>
  );
}

export default ButtonGoogle;
