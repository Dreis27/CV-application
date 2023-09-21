import DisplayForms from "../displayForms";
import ExpandableSection from "../expandableSection";
import ButtonCreateForm from "../buttonCreateForm";
import ExperienceForm from "./experienceForm";

export default function AddEducationSection({
    isOpen,
    setOpen,
    experiences,
    onChange,
    onCancel,
    onRemove,
    toggleCollapsed,
    onDelete,
    createForm,
}) {
    return (
        <div className="add-experience-section">
            <ExpandableSection
                sectionName='Experience'
                isOpen={isOpen}
                setOpen={setOpen}
            />
            <div className={`section-content ${isOpen ? "open" : ""}`}>
                <DisplayForms
                    forms={experiences}
                    onChange={onChange}
                    onCancel={onCancel}
                    onRemove={onRemove}
                    toggleCollapsed={toggleCollapsed}
                    onDelete={onDelete}
                    titleKey='companyName'
                    FormComponent={ExperienceForm}
                />
                <ButtonCreateForm onClick={createForm} formName="Experience"/>
            </div>
        </div>
    )
}