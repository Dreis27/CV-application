import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/personal-info/personalInfo';
import AddEducationSection from "./components/education/addEducationSection";
import AddExperienceSection from "./components/experience/addExperienceSection";
import Resume from "./components/resume";
import uniqid from "uniqid";



function App() {
  const [personalInfo, setPersonalInfo] = useState('');
  const [sections, setSections] = useState('');
  const [sectionOpen, setSectionOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState("content");
  const [prevState, setPrevState] = useState("top");

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if(obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  function createForm(arrayName, object) {
    setPrevState(null);

    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section});
  }

  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

    const createExperienceForm = () =>
      createForm("experiences", {
        companyName: "",
        positionTitle: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        isCollapsed: false,
        isHidden: false,
        id: uniqid(),
    });

    const setOpen = (sectionName) => setSectionOpen(sectionName);

    function removeForm(e) {
      const form = e.target.closest('.section-form');
      const {arrayName} = form.dataset;
      const section = sections[arrayName];
      const{id} = form;

      setSections({
        ...sections,
        [arrayName]: section.filter((item => item.id !==id)),
      });
    }

    function cancelForm(e) {
      if (prevState == null){
        removeForm(e);
        return;
      }

      const sectionForm = e.target.closest('.section-form');
      const {id} = sectionForm;
      const {arrayName} = sectionForm.dataset;
      const section  = sections[arrayName];

      setSections({
        ...sections,
        [arrayName]: section.map((form) => {
          if (form.id === id) {
            form = prevState;
            form.isCollapsed = true;
          }
          return form;
        }),
      });
    }

    function toggleValue(e, key) {
      const sectionForm = e.target.closest('.section-form');
      const {id} = sectionForm
      const {arrayName} = sectionForm.dataset;
      const section = sections[arrayName];
      setSections({
        ...sections,
        [arrayName]: section.map((form) => {
          if(form.id === id) {
            setPrevState(Object.assign({}, form));
            form[key] = !form[key];
          }

          return form;
        })
      })
    }

    const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");
    const toggleHidden = (e) => toggleValue(e, "isHidden");
 
  return (
    <>

    </>
  )
}

export default App
