const InputField = ({label, color = 'sky', ...props}) => {

    // const input = <input type="text" {...props}
    //                      className={`focus:bg-transparent bg-${color}-200 shadow-inner focus:shadow-none border border-${color}-400 focus:border-${color}-900 focus:border-2 outline-none rounded-sm p-1 mb-8`}/>

    return (
        <>
            {label ? (
                <div className="mb-3">
                    <label className="block mb-1">{label}</label>
                    {/*<input type="text" {...props}*/}
                    {/*       className={`focus:bg-transparent bg-${color}-200 shadow-inner focus:shadow-none border border-gray-400 focus:border-gray-500 outline-none rounded-sm p-1 mb-8`}/>*/}
                    {/*{input}*/}
                    <Input color={color} {...props}/>
                </div>
            ) : (
                // <input type="text" {...props}
                //        className={`focus:bg-transparent bg-${color}-200 shadow-inner focus:shadow-none border border-gray-400 focus:border-gray-500 outline-none rounded-sm p-1 mb-8`}/>
                // {input}
                <Input color={color} {...props}/>
                // <h2>hi</h2>
            )}
        </>
    );
};

const Input = ({color, ...props}) => (
    <input type="text" {...props}
           className={`focus:bg-transparent bg-${color}-200 shadow-inner focus:shadow-none border border-${color}-400 focus:border-${color}-900 outline-none rounded-sm p-1 mb-8`}/>
)
export default InputField;
