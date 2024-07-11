const comments = [
  {
    id: 1,
    img: "/assets/img/ComentsFoto2.jpeg",
    name: "Benjamin Smith",
    text: "SEO in Creativen People",
    comment:
      "This website stands out with its creative design, engaging content, and excellent navigation. It inspires and captivates imagination, offering a unique experience for every visitor. Impressive!",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 2,
    img: "/assets/img/ComentsFoto1.jpeg",
    name: "Alice Johnson",
    text: "Creative Design",
    comment:
      "I absolutely loved the design of this website. It's clean, modern, and easy to navigate. The content is engaging as well. I highly recommend it to anyone looking for a creative, engaging, and SEO-friendly website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 3,
    img: "/assets/img/ComentsFoto3.jpeg",
    name: "Jenny Pineapple",
    text: "Marketing",
    comment:
      "This website is easy to navigate and has a great focus on marketing. The content is informative and engaging. I recommend it to anyone looking for a marketing-focused website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 4,
    img: "/assets/img/ComentsFoto4.jpeg",
    name: "Sarah Orange",
    text: "UI/UX Design",
    comment:
      "This website has a clean, modern design and is easy to navigate. The content is informative and engaging. I highly recommend it to anyone looking for a UI/UX-focused website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 5,
    img: "/assets/img/ComentsFoto5.jpeg",
    name: "Emily Blue",
    text: "Brand Identity",
    comment:
      "This website has a clean, modern design and is easy to navigate. The content is informative and engaging. I highly recommend it to anyone looking for a brand identity-focused website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 6,
    img: "/assets/img/ComentsFoto6.jpeg",
    name: "Olivia Green",
    text: "Social Media",
    comment:
      "This website has a clean, modern design and is easy to navigate. The content is informative and engaging. I highly recommend it to anyone looking for a social media-focused website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 7,
    img: "/assets/img/ComentsFoto7.jpeg",
    name: "Isabella Pink",
    text: "Content Marketing",
    comment:
      "This website has a clean, modern design and is easy to navigate. The content is informative and engaging. I highly recommend it to anyone looking for a content marketing-focused website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 8,
    img: "/assets/img/ComentsFoto8.jpeg",
    name: "Mia Yellow",
    text: "E-Commerce",
    comment:
      "This website has a clean, modern design and is easy to navigate. The content is informative and engaging. I highly recommend it to anyone looking for an e-commerce-focused website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
  {
    id: 9,
    img: "/assets/img/ComentsFoto9.jpeg",
    name: "Ava Purple",
    text: "Advertising",
    comment:
      "This website has a clean, modern design and is easy to navigate. The content is informative and engaging. I highly recommend it to anyone looking for an advertising-focused website.",
    button: `<button class="rounded-4 btn-style-white-black  px-4 py-1">Project Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></button>`,
  },
];

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
