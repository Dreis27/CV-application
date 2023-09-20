

export default function CollapsedForm(props) {
    const {title, onClick, onDelete} = props;
    const {id} = props.form;

    return (
        <button
            className="collapsed-form-btn"
            onClick={onClick}
            id={id}
        >
            <p>{title}</p>
            <i className="fa-soldi fa-x"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(e);
                }}
            ></i>
        </button>
    )
}