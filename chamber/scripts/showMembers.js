const directory = document.querySelector('.grid');
//const url = 'https://stburgess.github.io/wdd230/chamber/data/members.json';
const url = 'data/members.json';

async function getMemberData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayMembers(data.members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const displayMembers = (members) => {
  members.forEach((member) => {

    let card = document.createElement('section');
    let name = document.createElement('p');
    let address1 = document.createElement('p');
    let address2 = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');
    let level = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = `${member.name}`;
    address1.textContent = `${member.address1}`;
    address2.textContent = `${member.address2}`;
    phone.textContent = `${member.phone}`;
    url.textContent = `${member.url}`;
    level.textContent = `${`(Member level: ${member.level})`}`;

    // Build the image portrait by setting all the relevant attributes

    url.setAttribute('href', `${member.url}`);
    image.setAttribute('src', `${member.image}`);
    image.setAttribute('alt', `${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '60');
    image.setAttribute('height', '60');

    // Append the section(card) with the created elements
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address1);
    card.appendChild(address2);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(level);

    directory.appendChild(card);
  });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
  directory.classList.add("grid");
  directory.classList.remove("list");
});

listbutton.addEventListener("click", showList);
function showList() {
  directory.classList.add("list");
  directory.classList.remove("grid");
}

getMemberData()