const menu = document.getElementById('menu')
const navigate = document.getElementById('navigate')
const closeMenu = document.getElementById('close-btn')  
const link = document.querySelectorAll('#link')
const containerProjects = document.querySelector('.project-items')
const closeAside = document.getElementById('close-aside')
const overlayAside = document.querySelector('.overlay-aside')
const aside = document.querySelector('aside')
const html = document.querySelector('html')
const asideProject = document.querySelector('.aside-project')

const projects = [
  {
    id:5,
    title: 'TexttoImage',
    url: 'https://image-generator-next.vercel.app/',
    github: 'https://github.com/uelthon/AI-image-generator',
    path: 'assets/texttoimage',
    img: 'assets/texttoimage/0.webp',
    backend: ['Express', 'MongoDB', 'Supabase'],
    frontend: ['ReactJS', 'Zustand', 'ReactQuery', 'Tailwind'],
    gallery: ['0', '1', '2'],
    extend: '.webp',
    desc: 'Convert text to image and create visually stunning content.'
  },
  {
    id: 4,
    title: 'TextRichNotes',
    url: 'https://textrichapp.onrender.com/',
    github: 'https://github.com/uelthon/TextRichApp',
    path: 'assets/textrichnotes',
    img: 'assets/textrichnotes/0.webp',
    backend: ['Express','Graphql', 'PostgresSQL'],
    frontend: ['ReactJS', 'Zustand', 'React Query'],
    gallery: ['0', '1'],
    extend: '.webp',
    desc: 'Keep all of your notes organized in one place'
  },
  {
    id: 1,
    title: 'CellStore',
    url: 'https://cellstore.onrender.com/',
    github: 'https://github.com/uelthon/cellstore-project',
    path: 'assets/cellstore',
    img: 'assets/cellstore/0.webp',
    backend: ['JavaScript', 'NodeJs', 'Express', 'MongoDB'],
    frontend: ['ReactJS', 'Redux', 'Bootstrap'],
    gallery: ['0','1','2','3','4'],
    extend: '.webp',
    desc: 'An PWA E-commerce Application to Buy Smartphones.'
  },
  {
    id: 2,
    title: 'CryptoView',
    url: 'https://cryptoview-ymxx.onrender.com/',
    github: 'https://github.com/uelthon/cryptoview-project',
    path: 'assets/cryptoview',
    img: 'assets/cryptoview/0.webp',
    backend: ['JavaScript', 'NodeJs', 'Express'],
    frontend: ['ReactJS', 'Redux', 'Bootstrap'],
    gallery: ['0', '1', '2', '3', '4'],
    extend: '.webp',
    desc: 'An overview of the complete cryptocurrency market'
  },
  {
    id: 3,
    title: 'My Porfolio',
    url: 'https://uelthon.github.io/',
    github: 'https://github.com/uelthon/uelthon.github.io',
    path: 'assets/myporfolio',
    img: 'assets/myporfolio/0.webp',
    backend: [],
    frontend: ['HTML5', 'CSS', 'JavaScript'],
    gallery: ['0','1','2','3'],
    extend: '.webp',
    desc: 'My Full Stack Web Developer Porfolio'
  }
]

menu.addEventListener('click', (e) => {
  e.preventDefault()
  navigate.classList.toggle('show-nav')
})

closeMenu.addEventListener('click', (e) => {
  e.preventDefault()
  navigate.classList.remove('show-nav')
})

link.forEach(e  => {
  e.addEventListener('click', () => {
    navigate.classList.remove('show-nav')
  })
})

function displayProject(id){
  const item = projects.find(e => e.id === id)
  if(!item) throw new Error({error: 'item dont exist'});
  const displayItem = `
                        <div class='item-title'>
                          <h2>${item.title}</h2>
                          <a href=${item.github} target="_blank" >
                            <i style="color:#f2f2f2;font-size:1.5em" class="fa-brands fa-github item"></i>
                          </a>
                        </div>
                        <p>${item.desc}</p>
                        <div class="aside-project-gallery">
                          ${item.gallery.map(e => `<img src=${item.path+'/'+e+item.extend} loading="lazy" />` ).join("")}
                        </div>
                        <a href=${item.url} target="_blank">Go to Project</a> 
                      `
   return asideProject.innerHTML = displayItem
}

function asideToggle(){
  overlayAside.classList.toggle('show-overlay-aside')
  aside.classList.toggle('show-aside')
  html.classList.toggle('html-overflow-hidden')
}

closeAside.addEventListener('click',() => {
  asideToggle()
})
overlayAside.addEventListener('click', () => {
  asideToggle()
})
function preview(id){
  try{
    displayProject(id)
    asideToggle()
  }catch(e){
    console.log(e)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  let displayProjects = projects.map(e => {
    return `
          <div class="project-item">
            <img class="project-img" src=${e.img} loading="lazy" />
            <div class="project-info">
              <h2>${e.title}</h2>
              <p>${e.desc}</p>
              <div class="project-tags">
                ${e.frontend.map(e => `<div class="project-tag">${e}</div>`).join("")}
              </div>
              <div class="project-tags">
                ${e.backend.map(e => `<div class="project-tag">${e}</div>`).join("")}
              </div>
              <div class='project-footer'>
                <a href=${e.url} target="_blank" >Go to Project</a>
                <button onclick="preview(${e.id})" >Previews</button>
                <a href=${e.github} target="_blank" >
                  <i style="font-size:1.5em" class="fa-brands fa-github item"></i>
                </a>
              </div>
            </div>
          </div>
    `
  })
  displayProjects = displayProjects.join("")
  containerProjects.innerHTML = displayProjects;
})