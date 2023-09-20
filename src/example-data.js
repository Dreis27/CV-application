import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  },

  sections: {
    educations: [
      {
        degree: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "",
        positionTitle: "",
        location: "",
        description:"",
        startDate: "",
        endDate: "",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "",
        positionTitle: "",
        location: "",
        description:"",
        startDate: "",
        endDate: "",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;