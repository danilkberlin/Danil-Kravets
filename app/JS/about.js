const MyData = [
  {
    title: "Name",
    value: "Danylo Kravets",
  },
  {
    title: "Phone",
    value: "+4915225988431",
  },
  {
    title: "Address",
    value: "Germany, Berlin",
  },
  {
    title: "Email",
    value: "danilkravets19@gmail.com",
  },
];

// Displaying the data
const NewDate = new Date();
const YearsOfExperience = NewDate.getFullYear() - 2022;

const getByYearsOfExperience = document.querySelector(".YearsOfExperience");

getByYearsOfExperience.textContent = YearsOfExperience + "+";

for (let i = 0; i < MyData.length; i++) {
  // Create a new div for each item
  const newRow = document.createElement("div");
  newRow.classList.add("row", "my-2");

  // Create a new column
  const newCol = document.createElement("div");
  newCol.classList.add("col-12");

  // Create a new title
  const newTitle = document.createElement("p");
  newTitle.classList.add("mb-0");
  newTitle.textContent = MyData[i].title;

  // Create a new value
  const newValue = document.createElement("h6");
  newValue.classList.add("text-start");
  newValue.classList.add("text-color");
  newValue.textContent = MyData[i].value;

  // Add title and value to the new column
  newCol.appendChild(newTitle);
  newCol.appendChild(newValue);

  // Add the new column to the new div
  newRow.appendChild(newCol);

  // Append the new div to the main section
  const mainSection = document.querySelector(".aboutGetDate");
  mainSection.appendChild(newRow);
}
