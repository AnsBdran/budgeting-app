import React from "react";

const Button = ({ children, className, primary, ...props }) => {
  const primaryStyles =
    "border-2 border-slate-900 hover:bg-slate-900 hover:border-slate-900 hover:text-slate-50";
  const normalStyles = "bg-slate-900 hover:bg-slate-800 text-slate-50";
  const styles = primary ? primaryStyles : normalStyles;
  return (
    <button
      className={"flex items-center gap-1  p-2 rounded" + " " + styles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
