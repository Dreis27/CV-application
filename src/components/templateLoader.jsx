

export default function TemplateLoader({ onClear }) {
    return (
        <button onClick={onClear} className="clear-resume">
            <i className="fa-solid fa-trash" />
            Clear Resume
        </button>
    )
}