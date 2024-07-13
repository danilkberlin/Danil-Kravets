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
  if (linkCss.getAttribute("href") === "./app/CSS/lightStyle.css") {
    linkCss.href = "./app/CSS/darkStyle.css";
  } else {
    linkCss.href = "./app/CSS/lightStyle.css";
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

for (let i = 0; i < comments.length; i++) {
  let comment = comments[i];

  // Create a THML format

  let CarouselHtml = `<div class="carousel-item">
        <div class="row my-3  align-items-center justify-content-start">
            <div class='col-md-2 col-4'>
                <img src="${comment.img}" class="rounded-circle img-fluid">
            </div>
            <div class='col-md-10 col-8'>
                <h3 class='text-color'>${comment.name}</h3>
                <p class='text-color m-0'>${comment.text}</p>
            </div>
        </div>
        <div class="row my-3 justify-content-start">
            <div class="col">
                <p class='text-color'>${comment.comment}</p>
            </div>
        </div>
        <div class="row my-3 justify-content-start">
            <div class="col">
                ${comment.button}
            </div>
        </div>
    </div>
    `;

  // Append the HTML to the carousel
  document.querySelector(".carouserComments").innerHTML += CarouselHtml;
}

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
  newYear.classList.add("mb-0", "text-grei");
  newYear.textContent = educations[i].year;

  //Create a h3 tag for location
  const newLocation = document.createElement("h3");
  newLocation.classList.add("mb-0", "text-color");
  newLocation.textContent = educations[i].location;

  //Create a span tag for span
  const newSpan = document.createElement("span");
  newSpan.classList.add("text-color");
  newSpan.textContent = educations[i].span;

  //Create a p tag for profession
  const newProfession = document.createElement("p");
  newProfession.classList.add("mb-0", "text-grei");
  newProfession.textContent = educations[i].profession;

  //Create a p tag for education
  const newEducation = document.createElement("p");
  newEducation.classList.add("mb-0", "text-grei");
  newEducation.textContent = educations[i].education;

  //Create a col2 > p tag for year
  newCol2.appendChild(newYear);
  //Create a col5ForLocation > h3 tag for location and p tag for profession
  newProfession.appendChild(newSpan);
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
  newYearForWork.classList.add("mb-0", "text-grei");
  newYearForWork.textContent = WorkExperience[i].year;

  //Create a h3 tag for location
  const newLocationForWork = document.createElement("h3");
  newLocationForWork.classList.add("mb-0", "text-color");
  newLocationForWork.textContent = WorkExperience[i].location;

  //Create a p tag for profession
  const newProfessionForWork = document.createElement("p");
  newProfessionForWork.classList.add("mb-0", "text-grei");
  newProfessionForWork.textContent = WorkExperience[i].profession;

  //Create a span tag for span
  const newSpanForWork = document.createElement("span");
  newSpanForWork.classList.add("text-color");
  newSpanForWork.textContent = WorkExperience[i].span;

  //Create a p tag for education
  const newEducationForWork = document.createElement("p");
  newEducationForWork.classList.add("mb-0", "text-grei");
  newEducationForWork.textContent = WorkExperience[i].education;

  //Create a col2 > p tag for year
  newCol2ForWork.appendChild(newYearForWork);
  //Create a col5ForLocation > h3 tag for location and p tag for profession

  newCol5ForLocationForWork.appendChild(newLocationForWork);
  newCol5ForLocationForWork.appendChild(newProfessionForWork);
  newProfessionForWork.appendChild(newSpanForWork);
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

const MyFavoriteTools = document.querySelector(".MyFavoriteTools > .row");

for (let i = 0; i < tools.length; i++) {
  // Create a new column
  const newCol = document.createElement("div");
  newCol.classList.add("mb-2", "col-md-2", "col-4");

  // Create a new card
  const card = document.createElement("div");
  card.classList.add("nav-button-content", "rounded-4", "text-center");

  // Check if the tool has an icon or an SVG
  if (tools[i].icon) {
    const img = document.createElement("img");
    img.src = tools[i].icon;
    img.classList.add("img-fluid", "w-50", "h-50", "my-2");
    card.appendChild(img); // Append the image to the card
  } else if (tools[i].svg) {
    const svg = document.createElement("svg");
    svg.innerHTML = tools[i].svg;
    svg.classList.add("text-center", "w-50", "h-50", "my-2");
    card.appendChild(svg); // Append the SVG to the card
  }

  // Create a new h6 tag for title
  const title = document.createElement("h6");
  title.classList.add("text-color", "mb-3");
  title.textContent = tools[i].title;
  card.appendChild(title); // Append the title to the card

  // Append the card to the column
  newCol.appendChild(card);

  // Append the column to the row
  MyFavoriteTools.appendChild(newCol);
}
