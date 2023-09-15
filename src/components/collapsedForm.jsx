

function CollapsedForm(props) {
    const { onClick, hideForm, title, arrayName } = props;
    const { isHidden, id } = props.form;
    return (
        <button
            className="collapsed-form"
            id = {id}
            onClick={onClick}
            data-array-name={arrayName}
        >
            <p className="collapsed-form-title">{title}</p>
            <i></i>
        </button>
    );
}

export default CollapsedForm;