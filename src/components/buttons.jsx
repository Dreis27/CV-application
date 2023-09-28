

export default function Buttons ({onCancel, onSave, onRemove}) {
    return (
        <div className="buttons">
            <button className="delete" onClick={onRemove} type='button'>
                <i className="fa-solid fa-trash" />
                Delete
            </button>
            
            <div className="main-buttons">
                <button className="cancel" onClick={onCancel} type="button">
                    Cancel
                </button>
                <button className="save" onClick={onSave} type="submit">
                    Save
                </button>
            </div>
        </div>
    )
}