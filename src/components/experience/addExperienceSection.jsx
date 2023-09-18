import ExpandableSection from "../expandableSection";
import ButtonCreateForm from "../buttonCreateForm";
import DisplayForms from "../displayForms";
import ExperienceForm from "./experienceForm";

function AddExperienceSection({
    isOpen,
    createForm,
    setOpen,
    experiences,
    onChange,
    onCancel,
    toggleCollapsed,
    onHide,
    onRemove,
}) {
    return (
        <div className="add-experience-section section">
            <ExpandableSection
                isOpen={isOpen}
                setOpen={setOpen}
                sectionName="Experience"
                iconName="fa-solid fa-briefcase"
            />

            <div className={`section-content ${isOpen ? "open" : ""}`}>
                <DisplayForms
                    forms={experiences}
                    onChange={onChange}
                    onCancel={onCancel}
                    toggleCollapsed={toggleCollapsed}
                    onHide={onHide}
                    onRemove={onRemove}
                    FormComponent={ExperienceForm}
                    titleKey="companyName"
                    arrayName="experiences"
                />

                <ButtonCreateForm onClick={createForm} buttonText="Experience" />
            </div>
        </div>
    );
}

export default AddExperienceSection;