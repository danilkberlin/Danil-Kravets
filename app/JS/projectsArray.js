const portfolios = [
  {
    id: 1,
    src: "/assets/img/project3.jpeg",
  },

  {
    id: 2,
    src: "/assets/img/project2.jpeg",
  },

  {
    id: 3,
    src: "/assets/img/project1.jpeg",
  },

  {
    id: 4,
    src: "/assets/img/project4.jpeg",
  },
];

const portfoliosCards = document.querySelector("card-portfolio");

portfolios.forEach((portfolio) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<img src="${portfolio.src}" alt="" />`;
});

console.log(portfoliosCards);
