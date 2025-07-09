import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-slate-800 mb-1">
          {label}
        </label>
      )}

      <div className="flex items-center border rounded px-3 py-2 bg-white">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm"
          value={value}
          onChange={onChange}
        />

        {type === "password" &&
          (showPassword ? (
            <FaRegEye
              size={18}
              className="text-primary cursor-pointer ml-2"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaRegEyeSlash
              size={18}
              className="text-gray-400 cursor-pointer ml-2"
              onClick={toggleShowPassword}
            />
          ))}
      </div>
    </div>
  );
};

export default Input;
 