import CollapsedForm from "./collapsedForm";

export default function DisplayForms ({
    forms,
    onChange,
    onCancel,
    onRemove,
    toggleCollapsed,
    onDelete,
    titleKey
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
                        onDelete={onDelete}
                    />
                ) : (
                    <FormComponent/>

                )
            )}
        </div>
    )
}