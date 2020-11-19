import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


function InputField({ label, type, name, setValue, ...rest }) {
	let iconPassword = type === 'password' ? true:false;
	const [stateVisiblePassword, setStateVisiblePassword]= useState(true);
	let styleVisiblePassword = `
		text-gray-600
		absolute
		h-full
		w-auto
		p-5
		inset-y-0
		right-0
		cursor-pointer
	`;

  return (
    <div className={`my-6 relative flex`}>
			<label
				htmlFor={name}
				className={`
					cursor-text
					group
					absolute
					text-gray-800
					h-full
					flex
					${rest.value ? ' mt-1 ml-2 text-sm items-start':'mx-5 items-center text-xl'}
					transition-all
					duration-100
				`}
			>{label}</label>

			{iconPassword && (
				stateVisiblePassword ?
					<AiFillEyeInvisible
						size={24}
						onClick={() => setStateVisiblePassword(false)}
						className={styleVisiblePassword}
					/> :
					<AiFillEye className={styleVisiblePassword} size={24} onClick={() => setStateVisiblePassword(true)} />
			)}

			<input
				className="
					w-full
					h-14
					p-5
					outline-none
					rounded
					border-gray-400
					border-2
					focus:border-blue-700
				"
        type={stateVisiblePassword && type === 'password' ? 'password':'text'}
        name={name}
				id={name}
        onChange={setValue}
        autoComplete={rest.autoComplete}
      />


    </div>
  );
}

export default InputField;
