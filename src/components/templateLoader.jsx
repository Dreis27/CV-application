import "../styles/templateLoader.css";

export default function TemplateLoader({ onClear }) {
    return (
        <div className="template-loader">
        <button onClick={onClear} className="clear-resume">
            <i className="fa-solid fa-trash" />
            Clear Resume
        </button>
        </div>
    )
}