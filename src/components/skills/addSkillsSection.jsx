import DisplayForms from "../displayForms";
import ExpandableSection from "../expandableSection";
import ButtonCreateForm from "../buttonCreateForm";
import EducationForm from "./educationForm";
import "../../styles/section.css";

export default function AddSkillsSection({
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
                sectionName='Skills'
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
                    titleKey='skillName'
                    FormComponent={EducationForm}
                    arrayName='skills'
                />
                <ButtonCreateForm onClick={createForm} formName="Skills"/>
            </div>
        </div>
    )
}