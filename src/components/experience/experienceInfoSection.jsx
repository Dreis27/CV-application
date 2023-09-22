import ExperienceInfo from "./experienceInfo";
import DisplaySection from "../displaySection";

export default function ExperienceInfoSection({experiences}) {
    return (
        <div className="experience-info-section">
            <DisplaySection
                array={experiences}
                InfoComponent={ExperienceInfo}
                title="Professional Experience"
            />
        </div>
    )
}