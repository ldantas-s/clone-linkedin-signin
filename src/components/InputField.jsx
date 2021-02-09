import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

function InputField({ label, type, name, ...rest }) {
	let iconPassword = type === 'password' ? true : false;
	const [stateVisiblePassword, setStateVisiblePassword] = useState(true);

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
		<div className="flex flex-col">
			<div className={`my-2 relative`}>
				<label
					htmlFor={name}
					className={`
					cursor-text
					group
					absolute
					text-gray-800
					h-full
					flex
					${rest.value ? ' mt-1 ml-2 text-sm items-start' : 'mx-5 items-center text-xl'}
					transition-all
					duration-100
				`}
				>
					{label}
				</label>

				{iconPassword &&
					(stateVisiblePassword ? (
						<AiFillEyeInvisible
							size={24}
							onClick={() => setStateVisiblePassword(false)}
							className={styleVisiblePassword}
						/>
					) : (
						<AiFillEye
							className={styleVisiblePassword}
							size={24}
							onClick={() => setStateVisiblePassword(true)}
						/>
					))}

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
					type={
						stateVisiblePassword && type === 'password' ? 'password' : 'email'
					}
					name={name}
					id={name}
					autoComplete={rest.autoComplete}
					{...rest}
				/>
			</div>
		</div>
	);
}

export default InputField;
