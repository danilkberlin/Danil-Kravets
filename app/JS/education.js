const educations = [
  {
    year: "2010-2015",
    location: "Drawing Concentration",
    profession: "Course by Ukrainian Academy of Arts",
    education:
      "Intensive drawing courses that present the fundamental and academic principles of drawing",
  },
  {
    year: "2018-2019",
    location: "Marketing",
    profession: "Course by Charkow Academy of Marketing",
    education:
      "Intensive marketing courses presenting the fundamental principles of promoting and delivering a product as well as sales",
  },
  {
    year: "2019-2020",
    location: "Ul/Ux Desing Specialization",
    profession: "Onlicne course by XDI",
    education:
      "This course is about how to complete the design process from beginning to end",
  },
  {
    year: "2023-2024",
    location: "Frontend development Specialization",
    profession: "By Little training",
    education:
      "I teach frontend development and have experience working with clients and code",
  },
];

const WorkExperience = [
  {
    year: "2019-2022",
    location: "System administrator",
    profession: "Work by Meest",
    education:
      "Worked as a data processor, transitioned to the development department, and assumed the role of a system administrator within a year",
  },
  {
    year: "2023",
    location: "Frontend Developer",
    profession: "Practice at Turbine Kreuzberg GmbH",
    education: "Gained experience in front-end development during internship",
  },
  {
    year: "2024",
    location: "Backend Developer",
    profession: "Practice at Turbine Kreuzberg GmbH",
    education: "Gained experience in back-end development during internship",
  },
];

console.table(WorkExperience);

for (let i = 0; i < educations.length; i++) {
  //Creatre a new div for each items
  const newRow = document.createElement("div");
  newRow.classList.add(
    "row",
    "border-top",
    "border-bottom",
    "align-items-center",
    "py-4"
  );

  //Create a new column 2
  const newCol2 = document.createElement("div");
  newCol2.classList.add("col-2");

  //Create a new column 5
  const newCol5ForLocation = document.createElement("div");
  newCol5ForLocation.classList.add("col-5");

  //Create a new column 5
  const newCol5ForEducation = document.createElement("div");
  newCol5ForEducation.classList.add("col-5");

  //Create a p tag for year
  const newYear = document.createElement("p");
  newYear.classList.add("mb-0");
  newYear.textContent = educations[i].year;

  //Create a h3 tag for location
  const newLocation = document.createElement("h3");
  newLocation.classList.add("mb-0");
  newLocation.textContent = educations[i].location;

  //Create a p tag for profession
  const newProfession = document.createElement("p");
  newProfession.classList.add("mb-0");
  newProfession.textContent = educations[i].profession;

  //Create a p tag for education
  const newEducation = document.createElement("p");
  newEducation.classList.add("mb-0");
  newEducation.textContent = educations[i].education;

  //Create a col2 > p tag for year
  newCol2.appendChild(newYear);
  //Create a col5ForLocation > h3 tag for location and p tag for profession
  newCol5ForLocation.appendChild(newLocation);
  newCol5ForLocation.appendChild(newProfession);
  //Create a col5ForEducation > p tag for education
  newCol5ForEducation.appendChild(newEducation);

  //Append the new columns to the new row
  newRow.appendChild(newCol2);
  newRow.appendChild(newCol5ForLocation);
  newRow.appendChild(newCol5ForEducation);

  //Append the new row to the main section
  const addEducation = document.querySelector(".addEducation");
  addEducation.appendChild(newRow);
}

for (let i = 0; i < WorkExperience.length; i++) {
  //Creat a new div for each items
  const newRowForWork = document.createElement("div");
  newRowForWork.classList.add(
    "row",
    "border-top",
    "border-bottom",
    "align-items-center",
    "py-4"
  );

  //Create a new column 2
  const newCol2ForWork = document.createElement("div");
  newCol2ForWork.classList.add("col-2");

  //Create a new column 5
  const newCol5ForLocationForWork = document.createElement("div");
  newCol5ForLocationForWork.classList.add("col-5");

  //Create a new column 5
  const newCol5ForEducationForWork = document.createElement("div");
  newCol5ForEducationForWork.classList.add("col-5");

  //Create a p tag for year
  const newYearForWork = document.createElement("p");
  newYearForWork.classList.add("mb-0");
  newYearForWork.textContent = WorkExperience[i].year;

  //Create a h3 tag for location
  const newLocationForWork = document.createElement("h3");
  newLocationForWork.classList.add("mb-0");
  newLocationForWork.textContent = WorkExperience[i].location;

  //Create a p tag for profession
  const newProfessionForWork = document.createElement("p");
  newProfessionForWork.classList.add("mb-0");
  newProfessionForWork.textContent = WorkExperience[i].profession;

  //Create a p tag for education
  const newEducationForWork = document.createElement("p");
  newEducationForWork.classList.add("mb-0");
  newEducationForWork.textContent = WorkExperience[i].education;

  //Create a col2 > p tag for year
  newCol2ForWork.appendChild(newYearForWork);
  //Create a col5ForLocation > h3 tag for location and p tag for profession
  newCol5ForLocationForWork.appendChild(newLocationForWork);
  newCol5ForLocationForWork.appendChild(newProfessionForWork);
  //Create a col5ForEducation > p tag for education
  newCol5ForEducationForWork.appendChild(newEducationForWork);

  //Append the new columns to the new row
  newRowForWork.appendChild(newCol2ForWork);
  newRowForWork.appendChild(newCol5ForLocationForWork);
  newRowForWork.appendChild(newCol5ForEducationForWork);

  //Append the new row to the main section
  const addWorkExperience = document.querySelector(".addWorkExperience");
  addWorkExperience.appendChild(newRowForWork);
}
