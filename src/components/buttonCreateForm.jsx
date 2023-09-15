

function ButtonCreateForm({ onClick, buttonText }) {
    return (
      <button className="create-form" onClick={onClick}>
        <h4 className="button-content">
          <i className="fa-solid fa-plus" />
          {buttonText}
        </h4>
      </button>
    );
  }
  
  export default ButtonCreateForm;