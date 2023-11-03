import InputField from "../inputField";
import Buttons from "../buttons";

export default function SkillsForm({onChange, onSave, onRemove, onCancel, form}) {

    return (
        <form 
            className="skills-form section-form"
            id={form.id}
            data-array-name="educations"
            onSubmit={(e) => e.preventDefault()}    
        >
            <InputField
                id='skill'
                placeholder='Enter the name of a skill'
                type='text'
                labelText='Skill'
                onChange={onChange}
                value={form.schoolName}
                data-key="skillName"
            />
            <InputField
                id='skill-details'
                placeholder='Describe the skill and your proficiency'
                type="textarea"
                labelText='Details'
                onChange={onChange}
                value={form.schoolName}
                data-key="skillDetails"
            />
            <Buttons onSave={onSave} onCancel={onCancel} onRemove={onRemove} />
        </form>
    )
}