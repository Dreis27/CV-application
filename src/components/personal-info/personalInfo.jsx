import InputField from "../inputField";

export default function PersonalInfo({onChange, fullName, email, phoneNumber, address}) {
    return (
        <form className="personal-info">
            <h2>Personal Info</h2>
            <InputField
                id='full-name'
                placeholder='Enter first and last name'
                type='text'
                labelText='Full name'
                onChange={onChange}
                value={fullName}
                data-key="fullName"
            />   
            <InputField
                id='email'
                placeholder='Enter email'
                type='text'
                labelText='Email'
                onChange={onChange}
                value={email}
                data-key="email"
            />   
            <InputField
                id='phone-number'
                placeholder='Enter phone number'
                type='tel'
                labelText='Phone number'
                onChange={onChange}
                value={phoneNumber}
                data-key="phoneNumber"
            />   
            <InputField
                id='address'
                placeholder='Enter address'
                type='text'
                labelText='Address'
                onChange={onChange}
                value={address}
                data-key="address"
            />   
        </form>
    )
}