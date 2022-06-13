const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const links = document.querySelector('.nav_items');
const navLinks = document.querySelectorAll('.nav_items li');
const about = document.querySelector('.infos');
const btn = document.querySelectorAll('.action-btn');
const lis = Array.from(navLinks);

function toggler() {
  logo.classList.toggle('hide');
  hamburger.classList.toggle('remove');
  document.body.classList.toggle('no-scroll');
}

menu.addEventListener('click', () => {
  toggler();
  links.classList.toggle('hide');
  closeHamburger.classList.toggle('remove');
  about.classList.toggle('blur');
});

for (let i = 0; i < lis.length; i += 1) {
  lis[i].addEventListener('click', () => {
    toggler();
    links.classList.add('hide');
    closeHamburger.classList.add('remove');
    about.classList.add('remove');
  });
}

const projectList = [
  {
    id: 1,
    name: 'Tonic',
    image: 'images/pic.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    image: 'images/pic1.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
  {
    id: 3,
    name: 'Facebook 360',
    image: 'images/pic2.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    image: 'images/pic3.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
];
const projectList2 = [
  {
    id: 1,
    name: 'Tonic',
    image: 'images/desktop-images/img1.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    image: 'images/desktop-images/img2.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
  {
    id: 3,
    name: 'Facebook 360',
    image: 'images/desktop-images/img3.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    image: 'images/desktop-images/img4.png',
    companyName: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christabelle143.github.io/mobile-version/',
    source: 'https://christabelle143.github.io/mobile-version/',
  },
];

function createPopup(idx, prop) {
  const subject = document.querySelector('.infos h1');
  subject.insertAdjacentHTML(
    'afterend',
    `
    <div class="mobile_window">
      <div class="container2">
        <div class="projects projects2">
          <div class="popup_head">
            <h4>${prop[idx].name}</h4>
            <span class="closepopup"><i class="bi bi-x-lg"></i></span>
          </div>
          <ul class="project_description">
            <li class="poppins" id="CompanyName">CANOPY</li>
            <li>
              <img class="bullet bullet1" src="images/bullet.png" alt="bullet" />
            </li>
            <li class="elements elements1" id="work">Back End Dev</li>
            <li>
              <img class="bullet bullet2" src="images/bullet.png" alt="bullet" />
            </li>
            <li class="elements elements2" id="date">2015</li>
          </ul>
          <div class="popup_img_div">
            <img
              class="popup_project_photo"
              src="${prop[idx].image}"
              alt="First project's image"
            />
          </div>
          <div class="position">
            <div class="popup_description">
              <p class="project_requirement" id="ptag">${
  prop[idx].description
}</p>
            </div>
            <div>
              <ul class="languages languages2 position1">
                ${prop[idx].technologies
    .map(
      (item) => `
                <li class="lang1 lang2 lang3">${item}</li>
                `,
    )
    .join('')}
              </ul>
              <hr />
              <div class="navigation-links">
                <a href="#" class="flex source"
                  >See Live<img src="images/Icon.png" alt="see-live-icon"
                /></a>
                <a href="" target="_blank" class="flex source"
                  >See Source<img src="images/git.png" alt="github-logo"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
  );
}
const closeModal = () => {
  const btnClose = document.querySelector('.closepopup');
  const modalBg = document.querySelector('.mobile_window');
  btnClose.addEventListener('click', (e) => {
    e.path[3].remove();
    document.body.classList.remove('no-scroll');
    modalBg.style.display = 'none';
  });
};
function handleClick(e) {
  const index = e.path[0].id;
  if (window.innerWidth < 600) {
    createPopup(index, projectList);
    closeModal();
    document.body.classList.remove('no-scroll');
  } else {
    createPopup(index, projectList2);
    closeModal();
  }
}
btn.forEach((item) => {
  item.addEventListener('click', handleClick);
});
// form validation
const email = document.getElementById('email');
const form = document.getElementById('input');
const displayMsg = document.getElementById('form-message-error');
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-message');
    displayMsg.textContent = 'Your email address should be in lowercase';
  } else {
    displayMsg.style.visibility = 'hidden';
  }
});
