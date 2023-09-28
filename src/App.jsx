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

    return (
        <div className="app">
            <div className="edit-side">
                <div className="form-container">
                    <TemplateLoader
                        onClear={}
                    />
                    <PersonalInfo
                        onChange={}
                        fullName={}
                        email={}
                        phoneNumber={}
                        address={}
                    />
                    <AddEducationSection
                        educations={}
                        isOpen={}
                        onChange={}
                        createForm={}
                        setOpen={}
                        onCancel={}
                        toggleCollapsed={}
                        onRemove={}
                        onDelete={}
                    />
                    <AddExperienceSection
                        experiences={}
                        isOpen={}
                        onChange={}
                        createForm={}
                        setOpen={}
                        onCancel={}
                        toggleCollapsed={}
                        onRemove={}
                        onDelete={}
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

