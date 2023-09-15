

function ExpandableSection({isOpen, setOpen, sectionName, iconName}) {
    return (
        <button
            className="expandable-section"
            onClick={{()=> setOpen(isOpen ? "" : sectionName)}}
        >
            <h2 className="expandable-section-header">
                <i className={`${iconName}`}/>
                {sectionName}
            </h2>
            <i className={`fa-solid fa-chevron-up chevron ${isOpen ? "open" : ""}`} />
        </button>
    );
}

export default ExpandableSection;