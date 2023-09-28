import InputField from "../inputField";

export default function ExperienceForm({props}) {
    const {companyName, positionTitle, location, description, startDate, endDate, id} = props.form
    const {onChange, onSave, onRemove, onCancel} = props;

    return (
        <form
            className="experience-form section-form"
            id={id}
            onSubmit={(e) => e.preventDefault()}
        >
            <InputField
                type="text"
                id="company-name"
                labelText="Company Name"
                placeholder="Enter company name"
                value={companyName}
                onChange={onChange}
                data-key="companyName"
            />
            <InputField
                type="text"
                id="position-title"
                labelText="Position Title"
                placeholder="Enter position title"
                value={positionTitle}
                onChange={onChange}
                data-key="positionTitle"
            />
            <InputField
                type="text"
                id="start-date"
                labelText="Start date"
                placeholder="Enter start date"
                value={startDate}
                onChange={onChange}
                data-key="startDate"
            />
            <InputField
                type="text"
                id="end-date"
                labelText="End date"
                placeholder="Enter end date"
                value={endDate}
                onChange={onChange}
                data-key="endDate"
            />
            <InputField
                type="text"
                id="location"
                labelText="Location"
                placeholder="Enter location"
                value={location}
                onChange={onChange}
                data-key="location"
            />
            <InputField
                type="textarea"
                id="description"
                labelText="Description"
                placeholder="Enter description"
                value={description}
                onChange={onChange}
                data-key="description"
            />
        </form>
    )
}