const LabeledInput = ({inputId, label, ...props}) => {
    return (
        <div>
            <label htmlFor={inputId}>{label}</label>
            {/* if the type is defined in props it will overwrite the specified type here. */}
            <input id={inputId} type="text" {...props}/>
        </div>
    )
};

export default LabeledInput;