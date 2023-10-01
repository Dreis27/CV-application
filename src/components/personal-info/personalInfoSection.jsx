import "../../styles/personalInfoSection.css";

export default function PersonalInfoSection({ email, fullName, phoneNumber, address }){
    return (
        <div className="personal-info-resume">
            <h1 className="resume-name">{fullName}</h1>
            <div className="contact-info">
                {address && (
                    <div>
                        <b>Address</b><br/>
                        {address}
                    </div>
                )}
                {phoneNumber && (
                    <div>
                        <b>Phone </b>
                        {phoneNumber}
                    </div>
                )}
                {email && (
                    <div>
                        <b>E-mail </b>
                        {email}
                    </div>
                )}
            </div>
        </div>
    )
}