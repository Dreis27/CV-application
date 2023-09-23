import PersonalInfoSection from "./personal-info/personalInfoSection";
import EducationInfoSection from "./education/educationInfoSection";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Resume({personalInfo, sections}) {
    return (
        <div className="resume-container">
            <div className="resume">
                <PersonalInfoSection
                    fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    address={personalInfo.address}
                />
                <div>
                    <EducationInfoSection educations={sections.educations}/>
                    <ExperienceInfoSection experiences={sections.experiences}/>
                </div>
            </div>
        </div>
    )
}