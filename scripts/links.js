const baseURL = "https://stburgess.github.io/wdd230/";
const linksURL = "https://stburgess.github.io/wdd230/data/links.json";
const activities = document.querySelector('#activities');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    const liElement = document.createElement('li');
    liElement.innerText = `${week.week}: `;
    week.links.forEach((link) => {
      const aElement = document.createElement('a');
      aElement.setAttribute('href', link.url);
      aElement.innerText = `${link.title}`
      liElement.append(aElement);
      liElement.append(` `);
    });
    activities.appendChild(liElement);
  });
}

getLinks();