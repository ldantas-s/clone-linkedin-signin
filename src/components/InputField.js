import React from 'react';


const InputField = ({ label, type, name, setValue, ...rest }) => {
  // let iconPass = name === 'password' ? true:false;

  return (
    <div className="my-6">
      <label htmlFor={name}>{label}</label>
			<input
				className="w-full h-14 p-4 outline-none rounded border-blue-300 border focus:border-2"
        type={type}
        name={name}
        id={name}
        onChange={setValue}
        autoComplete={rest.autoComplete}
      />
      {/* Show/Hide password */}
      {/* {iconPass && <span>ICON</span>} */}
    </div>
  );
}

export default InputField;
