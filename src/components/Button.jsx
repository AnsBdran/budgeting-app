import React from "react";

const Button = ({ children, className, color = "gray", primary, ...props }) => {
  // const primaryStyles =
  //   "border-2 border-slate-900 hover:bg-slate-900 hover:border-slate-900 hover:text-slate-500";
  // const normalStyles = "bg-slate-900 hove
  //  r:bg-slate-800 text-slate-50";
  // const styles = primary ? primaryStyles : normalStyles;
  // const hoverClass = `hover:bg-${color}-800`
  return (
    <button
      className={`flex items-center gap-1 px-3 py-2 text-gray-100 rounded bg-${color}-900 hover:bg-${color}-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
