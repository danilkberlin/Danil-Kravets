// ========= Projects section =========
for (var i = 0; i < imgArray.length; i++) {
  //Div class Col-5
  const col = document.createElement("div");
  col.classList.add("col-lg-6");
  col.classList.add("col-md-6");
  col.classList.add("col-sm-12");
  col.classList.add("my-3");

  //Div class Card
  const card = document.createElement("div");
  card.classList.add("card");

  //Img tag

  const img = document.createElement("img");
  img.src = imgArray[i].img;
  img.classList.add("card-img-top");
  img.classList.add("img-fluid");
  img.classList.add("rounded-2");
  img.classList.add("projects-img-w");

  //all column + card + img
  col.appendChild(card);
  card.appendChild(img);

  const appChildRow = document.querySelector("#cardArray>.row");
  appChildRow.appendChild(col);
}

// ========= Projects section =========

const StartMyProgrammingEducation = 2022;

const NewDate = new Date();
const YearsOfExperience = NewDate.getFullYear() - StartMyProgrammingEducation;

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
  newTitle.classList.add("mb-0", "text-grei");
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

const ChangeThemeButton = document.querySelector("#theme-toggle-button");

ChangeThemeButton.addEventListener("change", function () {
  const linkCss = document.querySelector("#linksStyle");
  if (linkCss.getAttribute("href") === "../CSS/lightStyle.css") {
    linkCss.href = "../CSS/darkStyle.css";
  } else {
    linkCss.href = "../CSS/lightStyle.css";
  }
});

// ========= Fixed Info Card =========
const navbarExample = document.getElementById("navbar-example2");
const viewportWidth = window.innerWidth;

// ========= Fixed Info Card =========

function updateCardFixed() {
  if (viewportWidth >= 992) {
    navbarExample.classList.add("position-fixed", "w-25", "fixed-card");
  } else {
    navbarExample.classList.remove("position-fixed", "top-0");
  }
}

updateCardFixed();
window.addEventListener("resize", updateCardFixed);
