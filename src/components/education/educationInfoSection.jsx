import EducationInfo from "./educationInfo";
import DisplaySection from "../displaySection";

function EducationInfoSection({ educations }) {
    return (
        <div className="education-info-section resume-section">
            <DisplaySection
                array={educations}
                InfoComponent={EducationInfo}
                title="Education"
            />
        </div>
    );
}

export default EducationInfoSection;