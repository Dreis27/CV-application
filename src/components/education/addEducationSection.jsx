import DisplaForms from "../displayForms";
import ExpandableSection from "../expandableSection";
import ButtonCreateForm from "../buttonCreateForm";
import EducationForm from "./educationForm";

function AddEducationSection({
    educations,
    isOpen,
    onChange,
    createForm,
    setOpen,
    onCancel,
    toggleCollapsed,
    onHide,
    onRemove,
}) {
    return (
        <div className="add-education-section section">
            <ExpandableSection
                isOpen={isOpen}
                setOpen={setOpen}
                sectionName="Education"
                iconName="fa-solid fa-graduate-cap"    
            />
            <div className={`section-content ${isOpen ? "open" : ""}`}>
                <DisplaForms
                    forms={educations}
                    FormComponent={EducationForm}
                    onChange={onChange}
                    onCancel={onCancel}
                    onHide={onHide}
                    onRemove={onRemove}
                    toggleCollapsed={toggleCollapsed}
                    titleKey="schoolName"
                    arrayName="educations"
                />

                <ButtonCreateForm onClick={createForm} buttonText="Education" />
            </div>
        </div>
    );
}

export default AddEducationSection;