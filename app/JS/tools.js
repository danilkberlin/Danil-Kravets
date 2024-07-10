const tools = [
  {
    icon: "/assets/img/htmlIcon.svg",
    title: "HTML",
  },
  {
    icon: "/assets/img/cssIcon.svg",
    title: "CSS",
  },
  {
    icon: "/assets/img/JSIcon.svg",
    title: "JavaScript",
  },
  {
    icon: "/assets/img/reactIcon.svg",
    title: "React",
  },
  {
    icon: "/assets/img/nodeIcon.svg",
    title: "Node.js",
  },
  {
    icon: "/assets/img/bootstrapIcon.svg",
    title: "Bootstrap",
  },
  {
    icon: "/assets/img/tailwindcssIcon.svg",
    title: "Tailwindcss",
  },
  {
    icon: "/assets/img/sassIcon.svg",
    title: "Sass",
  },
  {
    icon: "/assets/img/illustratorIcon.svg",
    title: "Illustrator",
  },
  {
    icon: "/assets/img/figmaIcon.svg",
    title: "Figma",
  },
  {
    icon: "/assets/img/photoshopIcon.svg",
    title: "Photoshop",
  },
  {
    icon: "/assets/img/VSCIcon.svg",
    title: "VSCode",
  },
];

console.table(tools);

for (var i = 0; i < tools.length; i++) {
  // Create a new column
  const newCol = document.createElement("div");
  newCol.classList.add("mb-2", "col-md-2", "col-4");

  // Create a new card
  const card = document.createElement("div");
  card.classList.add("nav-button-content", "rounded-4", "text-center");

  //Create a new img tag for icon
  const img = document.createElement("img");
  img.src = tools[i].icon;
  img.classList.add("img-fluid", "w-50", "h-50", "my-2");

  // Create a new h6 tag for title
  const title = document.createElement("h6");
  title.classList.add("text-color", "mb-3");
  title.textContent = tools[i].title;

  // Append the new elements to the card
  card.appendChild(img);
  card.appendChild(title);

  // Append the new card to the new column
  newCol.appendChild(card);

  // Append the new column to the new row

  // Append the new row to the main section
  const MyFavoriteTools = document.querySelector(".MyFavoriteTools>.row");
  MyFavoriteTools.appendChild(newCol);
}
