import "../styles/buttonCreateForm.css";

export default function ButtonCreateForm({onClick, formName}) {
    return (
        <button className="create-form" onClick={onClick}>
            <h4 className="button-content">
                <i className="fa-solid fa-plus" />
                {formName}
            </h4>
        </button>
    )
}