import ExperienceInfo from "./experienceInfo";
import DisplaySection from "../displaySection";

function ExperienceInfoSection({ experiences }) {
    return (
        <div className="experience-info-section resume-section">
            <DisplaySection
                array={experiences}
                InfoComponent={ExperienceInfo}
                title="Professional Experience"
            />
        </div>
    );
}

export default ExperienceInfoSection;