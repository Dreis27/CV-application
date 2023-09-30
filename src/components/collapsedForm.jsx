import "../styles/collapsedForm.css";

export default function CollapsedForm(props) {
    const {title, onClick, onDelete, arrayName} = props;
    const {id} = props.form;

    return (
        <button
            className="collapsed-form-btn section-form"
            onClick={onClick}
            id={id}
            data-array-name={arrayName}
        >
            <p>{title}</p>
            <b className="fa-soldi fa-x"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(e);
                }}
            ></b>
        </button>
    )
}