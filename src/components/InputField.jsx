import React from "react";

const InputField = ({ label, ...props }) => {
  const input = (
    <input
      type="text"
      {...props}
      className="border outline-none bg-slate-100 focus:bg-white focus:border-slate-700 rounded-sm p-1 mb-1"
    />
  );

  return (
    <>
      {label ? (
        <div className="mb-3">
          <label className="block mb-1">{label}</label>
          {input}
        </div>
      ) : (
        <>{input}</>
      )}
    </>
  );
};

export default InputField;
