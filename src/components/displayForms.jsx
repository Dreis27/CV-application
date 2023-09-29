import CollapsedForm from "./collapsedForm";

export default function DisplayForms ({
    forms,
    onChange,
    onCancel,
    onRemove,
    toggleCollapsed,
    onDelete,
    titleKey,
    FormComponent,
    arrayName
}) {
    return (
        <div className="forms-container">
            {forms.map((form) => 
                form.isCollapsed ? (
                    <CollapsedForm
                        onClick={toggleCollapsed}
                        key={form.id}
                        form={form}
                        title={form[titleKey]}
                        arrayName={arrayName}
                        onDelete={onDelete}
                    />
                ) : (
                    <FormComponent
                        onChange={onChange}
                        form={form}
                        key={form.id}
                        onCancel={onCancel}
                        onRemove={onRemove}
                        onSave={toggleCollapsed}
                    />

                )
            )}
        </div>
    )
}