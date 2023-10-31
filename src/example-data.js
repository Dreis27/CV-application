import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Andrejs Bagdonas",
    email: "andrejs.bagdonas@email.email",
    phoneNumber: "+123 456 7890",
    address: "Leipzig, Germany",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Computer Science",
        schoolName: "Lancaster University",
        location: "Leipzig, Germany",
        startDate: "10/2022",
        endDate: "present",
        isCollapsed: true,
        id: uniqid(),
      },
    ],

    experiences: [

    ],
  },
};

export default exampleData;