import InputField from "../inputField";


function PersonalInfo({onChange, email, fullName, phoneNumber, address}) {
    return (
        <form className="personal-info">
           <h2>Personal Details</h2>
           <InputField
                type="text"
                id="full-name"
                labelText="Full Name"
                placeholder="First and last name"
                value={fullName}
                onChange={onChange}
                data-key="fullName"
           />
            <InputField
                type="email"
                id="email"
                labelText="Email"
                placeholder="Enter email"
                value={email}
                onChange={onChange}
                data-key="email"
           />
            <InputField
                type="tel"
                id="phone-number"
                labelText="Phone number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={onChange}
                data-key="phoneNumber"
           />
            <InputField
                type="text"
                id="address"
                labelText="Address"
                placeholder="Enter your address"
                value={address}
                onChange={onChange}
                data-key="address"
           />
        </form>
    )
}

export default PersonalInfo;