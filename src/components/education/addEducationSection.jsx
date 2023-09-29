import DisplayForms from "../displayForms";
import ExpandableSection from "../expandableSection";
import ButtonCreateForm from "../buttonCreateForm";
import EducationForm from "./educationForm";
import "../../styles/section.css";

export default function AddEducationSection({
    isOpen,
    setOpen,
    educations,
    onChange,
    onCancel,
    onRemove,
    toggleCollapsed,
    onDelete,
    createForm,
}) {
    return (
        <div className="add-education-section section">
            <ExpandableSection
                sectionName='Education'
                isOpen={isOpen}
                setOpen={setOpen}
            />
            <div className={`section-content ${isOpen ? "open" : ""}`}>
                <DisplayForms
                    forms={educations}
                    onChange={onChange}
                    onCancel={onCancel}
                    onRemove={onRemove}
                    toggleCollapsed={toggleCollapsed}
                    onDelete={onDelete}
                    titleKey='schoolName'
                    FormComponent={EducationForm}
                    arrayName='educations'
                />
                <ButtonCreateForm onClick={createForm} formName="Education"/>
            </div>
        </div>
    )
}