

function PersonalInfoSection({ email, fullName, phoneNumber, address }) {
    return (
        <div className="personal-info">
            <h1 className="resume-name">{fullName}</h1>
            <div className="contact-info">
                {address && (
                    <div> <b>Address</b><br/>
                        {address}
                    </div>
                )}

                {phoneNumber && (
                    <div> <b>Phone</b> {phoneNumber} </div>
                )}

                {email && (
                    <div> <b>Email</b>{email}</div>
                )}
            </div>
        </div>
    );
}

export default PersonalInfoSection;