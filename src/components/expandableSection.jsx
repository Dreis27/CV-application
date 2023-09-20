

export default function ExpandableSection({sectionName, isOpen, setOpen}) {
    return (
        <button
            className="expandable-section"
            onClick={()=>setOpen(isOpen ? "" : sectionName)}
        >
            <h2 className="expandable-section-title">
                {sectionName}
            </h2>
            <i className={`fa-solid fa-chevron-up chevron ${isOpen ? "open" : ""}`}></i>
        </button>
    )
}