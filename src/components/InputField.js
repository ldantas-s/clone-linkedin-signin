import React from 'react';


const InputField = ({ label, type, name, setValue, ...rest }) => {
  // let iconPass = name === 'password' ? true:false; 

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input 
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