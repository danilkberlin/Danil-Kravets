const imgArray = [
  {
    id: 1,
    img: "/assets/img/project3.jpeg",
  },
  {
    id: 2,
    img: "/assets/img/project4.jpeg",
  },
  {
    id: 3,
    img: "/assets/img/project1.jpeg",
  },
  {
    id: 4,
    img: "/assets/img/project2.jpeg",
  },
];

console.table(imgArray);

for (var i = 0; i < imgArray.length; i++) {
  //Div class Col-5
  const col = document.createElement("div");
  col.classList.add("col-lg-5");
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
  console.log(img);

  //all column + card + img
  col.appendChild(card);
  card.appendChild(img);

  const appChildRow = document.querySelector("#cardArray>.row");
  appChildRow.appendChild(col);
}
