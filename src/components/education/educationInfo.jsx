

export default EducationInfo({ info }) {
    const { schoolName, degrees, location, startDate, endDate } = info;
    return (
        <div className="education-info">
            <div className="education-info-group">
                <p className="dates">
                    {startDate}
                    {startDate && endDate && <span>-</span>}
                    {endDate}
                </p>
                <p>{location}</p>
            </div>

            <div className="education-info-group">
                <p className="education-info-schoolName">{schoolName}</p>
                <p className="education-info-degree">{degree}</p>
            </div>
        </div>
    )
}