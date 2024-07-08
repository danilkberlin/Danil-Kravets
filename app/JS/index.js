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
