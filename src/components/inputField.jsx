

export default function InputField({
    id,
    placeholder,
    type,
    labelText,
    onChange,
    value,
}) {
    return (
        <div className="input-field">
            <label htmlFor={id}>
                <span className="label-text">{labelText}</span>
            </label>

            {type === "textarea" ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                ></textarea>
            ) : (
                <input 
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            )}
        </div>
    )
}