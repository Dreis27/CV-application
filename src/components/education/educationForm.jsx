import InputField from "../inputField";
import Buttons from "../buttons";

export default function EducationForm({props}) {
    const {school, degree, startDate, endDate, location, id} = props.form
    const {onChange, onSave, onRemove, onCancel} = props
    return (
        <form 
            className="education-form section-form"
            id={id}
            onSubmit={(e) => e.preventDefault()}    
        >
            <InputField
                id='school'
                placeholder='Enter school/university'
                type='text'
                labelText='School'
                onChange={onChange}
                value={school}
                data-key="schoolName"
            />
            <InputField
                id='degree'
                placeholder='Enter degree / field of study'
                type='text'
                labelText='Degree'
                onChange={onChange}
                value={degree}
                data-key="degree"
            />
            <InputField
                id='start-date'
                placeholder='Enter start date'
                type='text'
                labelText='Start Date'
                onChange={onChange}
                value={startDate}
                data-key="startDate"
            />
            <InputField
                id='end-date'
                placeholder='Enter end date'
                type='text'
                labelText='End Date'
                onChange={onChange}
                value={endDate}
                data-key="endDate"
            />
            <InputField
                id='location'
                placeholder='Enter location'
                type='text'
                labelText='Location'
                onChange={onChange}
                value={location}
                data-key="location"
            />

            <Buttons onSave={onSave} onCancel={onCancel} onRemove={onRemove} />
        </form>
    )
}