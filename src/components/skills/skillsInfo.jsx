import "../../styles/skillsInfo.css";

export default function EducationInfo({ info }) {
    const { skill, skillDetails } = info;

    return (
        <div className="education-info">
            <p>{skill}</p>
            <p>{skillDetails}</p>
        </div>
    )
}