import EducationInfo from "./educationInfo";
import DisplaySection from "../displaySection";

export default function EducationInfoSection({ educations }) {
    return (
        <div className="education-info-section">
            <DisplaySection
                array={educations}
                InfoComponent={EducationInfo}
                title="Education"
            />
        </div>
    )
}