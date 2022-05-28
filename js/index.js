// Lesson Task 2 Question
const url = "https://breakingbadapi.com/api/characters/6";
const container = document.querySelector(".container");


async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const details = data[0];
    createHtml(details);
  }
  catch(error) {
    console.log(error);
  }
}
getData();

function createHtml(details) {
  container.innerHTML += `<p>${details.name}</p>
                          <img src="${details.img}" alt="${details.name}">
                          <p>${details.status}</p>`;
}