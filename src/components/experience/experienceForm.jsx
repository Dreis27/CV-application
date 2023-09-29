import InputField from "../inputField";
import Buttons from "../buttons";

export default function ExperienceForm({onChange, onSave, onRemove, onCancel, form}) {

    return (
        <form
            className="experience-form section-form"
            id={form.id}
            onSubmit={(e) => e.preventDefault()}
            data-array-name="experiences"
        >
            <InputField
                type="text"
                id="company-name"
                labelText="Company Name"
                placeholder="Enter company name"
                value={form.companyName}
                onChange={onChange}
                data-key="companyName"
            />
            <InputField
                type="text"
                id="position-title"
                labelText="Position Title"
                placeholder="Enter position title"
                value={form.positionTitle}
                onChange={onChange}
                data-key="positionTitle"
            />
            <InputField
                type="text"
                id="start-date"
                labelText="Start date"
                placeholder="Enter start date"
                value={form.startDate}
                onChange={onChange}
                data-key="startDate"
            />
            <InputField
                type="text"
                id="end-date"
                labelText="End date"
                placeholder="Enter end date"
                value={form.endDate}
                onChange={onChange}
                data-key="endDate"
            />
            <InputField
                type="text"
                id="location"
                labelText="Location"
                placeholder="Enter location"
                value={form.location}
                onChange={onChange}
                data-key="location"
            />
            <InputField
                type="textarea"
                id="description"
                labelText="Description"
                placeholder="Enter description"
                value={form.description}
                onChange={onChange}
                data-key="description"
            />

            <Buttons onSave={onSave} onCancel={onCancel} onRemove={onRemove} />
        </form>
    )
}