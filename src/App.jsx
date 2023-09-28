import { useState } from "react";
import PersonalInfo from "./components/personal-info/personalInfo";
import AddEducationSection from "./components/education/addEducationSection";
import AddExperienceSection from "./components/experience/addExperienceSection";
import Resume from "./components/resume";
import uniqid from "uniqid";
import TemplateLoader from "./components/templateLoader";
import exampleData from "./example-data";


export default function App() {
    const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
    const [sections, setSections] = useState(exampleData.sections);
    const [sectionOpen, setSectionOpen] = useState(null);
    const [prevState, setPrevState] = useState(null);

    function handlePersonalInfoChange(e) {
        const {key} = e.target.dataset; // e.target.dataset.key corresponds to 'data-key' attribute. I need to add those in corresponding components
        setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }

    function handleSectionChange(e) {
        const {key} = e.target.dataset;
        const inputValue = e.target.value;
        const form = e.target.closest('.section=form');
        const {id} = form;
        const {arrayName} = form.dataset;
        const section = sections[arrayName];
        setSections({
            ...sections,
            [arrayName]: section.map((obj) => {
                if (obj.id === id) obj[key] = inputValue;
                return obj;
            })
        });
    }

    function createForm(arrayName, object) {
        setPrevState(null);
        const section = structuredClone(sections[arrayName]);
        section.push(object);
        setSections({ ...sections, [arrayName]: section});
    }

    const setOpen = (sectionName) => setSectionOpen(sectionName);

    function removeForm(e) {
        const form = e.target.closest('.section-form');
        const { arrayName } = form.dataset;
        const section = sections[arrayName];
        const {id} = form;

        setSections({
            ...sections,
            [arrayName]: section.filter((item) => item.id !== id),
        });
    }

    function cancelForm(e) {
        if(prevState == null) {
            removeForm(e);
            return;
        }

        const sectionForm = e.target.closest(".section-form");
        const {id} = sectionForm;
        const {arrayName} = sectionForm.dataset;
        const section = sections[arrayName];

        setSections({
            ...sections,
            [arrayName]: section.map((form) => {
                if(form.id === id) {
                    form = prevState;
                    form.isCollapsed = true;
                }

                return form;
            })
        })
    }

    function toggleCollapsed(e) {
        const sectionForm = e.target.closest(".section-form");
        const {id} = sectionForm;
        const {arrayName} = sectionForm.dataset;
        const section = sections[arrayName];
        setSections({
            ...sections, 
            [arrayName]: section.map((form) => {
                if(form.id === id) {
                    setPrevState(Object.assign({}, form));
                    form['isCollapsed'] = !form['isCollapsed'];
                }
                return form;
            })
        });
    }

    const createEducationForm = () => 
        createForm('educations', {
            degree: '',
            schoolName: '',
            location: '',
            startDate: '',
            endDate: '',
            isCollapsed: false,
            id: uniqid(),
        });
    
    const createExperienceForm = () =>
        createForm('experiences', {
            companyName: '',
            positionTitle: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
            isCollapsed: '',
            id: uniqid(),
        });

    return (
        <div className="app">
            <div className="edit-side">
                <div className="form-container">
                    <TemplateLoader
                        onClear={() => {
                            setPersonalInfo({
                                fullName: '',
                                email: '',
                                phoneNumber: '',
                                address: '',
                            });
                            setSections({educations: [], experiences: []});
                            setPrevState(null);
                        }}
                    />
                    <PersonalInfo
                        onChange={handlePersonalInfoChange}
                        fullName={personalInfo.fullName}
                        email={personalInfo.email}
                        phoneNumber={personalInfo.phoneNumber}
                        address={personalInfo.address}
                    />
                    <AddEducationSection
                        educations={sections.educations}
                        isOpen={sectionOpen === "Education"}
                        onChange={handleSectionChange}
                        createForm={createEducationForm}
                        setOpen={setOpen}
                        onCancel={cancelForm}
                        toggleCollapsed={toggleCollapsed}
                        onRemove={removeForm}
                        onDelete={removeForm}
                    />
                    <AddExperienceSection
                        experiences={sections.experiences}
                        isOpen={sectionOpen === "Experience"}
                        onChange={handleSectionChange}
                        createForm={createExperienceForm}
                        setOpen={setOpen}
                        onCancel={cancelForm}
                        toggleCollapsed={toggleCollapsed}
                        onRemove={removeForm}
                        onDelete={removeForm}
                    />                        
                </div>
            </div>

            <Resume
                personalInfo={personalInfo}
                sections={sections}
            />
        </div>
    )
}

