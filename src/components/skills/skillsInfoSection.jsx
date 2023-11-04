import SkillsInfo from "./educationInfo";
import DisplaySection from "../displaySection";

export default function SkillsInfoSection({ skills }) {
    return (
        <div className="education-info-section">
            <DisplaySection
                array={skills}
                InfoComponent={SkillsInfo}
                title="Education"
            />
        </div>
    )
}