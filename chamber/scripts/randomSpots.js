const memberSpots = document.querySelector("#memberSpots");
const url = 'data/members.json';

async function getMemberData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displaySpots(data.members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const displaySpots = (members) => {
  let spotMemsI = [];
  while (spotMemsI.length < 3) {
    let randMemI = Math.floor(Math.random() * members.length);
    console.log(randMemI);
    if (!spotMemsI.includes(randMemI)) {
      let memLevel = members[randMemI].level;
      if (memLevel === "Gold" || memLevel === "Silver") {
        spotMemsI.push(randMemI);
      }
    }

  }

  spotMemsI.forEach((spotMemI) => {
    let card = document.createElement('section');
    let name = document.createElement('p');
    let address1 = document.createElement('p');
    let address2 = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');
    let level = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = `${members[spotMemI].name}`;
    address1.textContent = `${members[spotMemI].address1}`;
    address2.textContent = `${members[spotMemI].address2}`;
    phone.textContent = `${members[spotMemI].phone}`;
    url.textContent = `${members[spotMemI].url}`;
    level.textContent = `${`${members[spotMemI].level.toUpperCase()} Member`}`;

    // Build the image portrait by setting all the relevant attributes

    url.setAttribute('href', `${members[spotMemI].url}`);
    image.setAttribute('src', `${members[spotMemI].image}`);
    image.setAttribute('alt', `${members[spotMemI].name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '150');
    image.setAttribute('height', '150');

    // Append the section(card) with the created elements
    card.appendChild(level);
    card.appendChild(image);
    card.appendChild(name);

    memberSpots.appendChild(card);
  });
}

getMemberData()