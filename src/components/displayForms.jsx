import CollapsedForm from "./collapsedForm";

function DisplayForms({
    forms,
    onChange,
    onCancel,
    toggleCollapsed,
    onHide,
    onRemove,
    FormComponent,
    titleKey,
    arrayName,
}) {
    return (
        <div className="form-container">
            {forms.map(form =>
                form.isCollapsed ? (
                    <CollapsedForm
                        onClick={toggleCollapsed}
                        key={form.id}
                        form={form}
                        title={form[titleKey]}
                        arrayName={arrayName}
                        hideForm={onHide}
                    />
                ) : (
                    <FormComponent
                        onChange={onChange}
                        form={form}
                        key={form.id}
                        cancel={onCancel}
                        save={toggleCollapsed}
                        remove={onRemove}
                    />
                ))}
        </div>
    );
}

export default DisplayForms;