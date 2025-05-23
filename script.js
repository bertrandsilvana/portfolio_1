const root = document.getElementById("root");

initSPA();

function initSPA() {
  root.innerHTML = "";

  renderHeader();
  renderMain();
  renderFooter();
}


function renderHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const logo = document.createElement("div");
  logo.classList.add("logo");

  const img = document.createElement("img");
  img.src = "https://i.pinimg.com/564x/5f/6e/54/5f6e54fce0679bf675cf8bab62c66816.jpg";
  img.alt = "Logo";
  logo.appendChild(img);
  img.classList.add("wave-logo");

  const name = document.createElement("span");
  name.textContent = "Bertrand Silvana"; 
  name.classList.add("name");
  logo.appendChild(name);


  const nav = document.createElement("nav");
  nav.appendChild(createNavButton("Inicio", showHome));
  nav.appendChild(createNavButton("Proyectos", showProjects));
  nav.appendChild(createNavButton("Contacto", showContact));

  header.appendChild(logo);
  header.appendChild(nav);

  root.appendChild(header);
}


function renderMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.id = "main-content";
  root.appendChild(main);

  showHome();
}

function renderFooter() {
  const footer = document.createElement("footer");

  const p = document.createElement("p");
  p.textContent = "Sígueme en mis redes:";

  const social = document.createElement("div");
  social.classList.add("social");

  ["Facebook", "Instagram", "GitHub"].forEach(platform => {
    const a = document.createElement("a");
    a.href = `https://${platform.toLowerCase()}.com`;
    a.target = "_blank";
    a.textContent = platform;
    social.appendChild(a);
  });

  footer.appendChild(p);
  footer.appendChild(social);
  root.appendChild(footer);
}


function createNavButton(text, callback) {
  const btn = document.createElement("div");
  btn.classList.add("buttonNav");
  btn.textContent = text;
  btn.addEventListener("click", callback);
  return btn;
}


function showHome() {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("home-container");

  const textDiv = document.createElement("div");
  textDiv.classList.add("home-text");

  const h2 = document.createElement("h2");
  h2.textContent = "Bienvenido a mi Portfolio";

  const p = document.createElement("p");
  p.textContent = "Soy estudiante Tecda  y este es mi portafolio creado con JavaScript puro (SPA).";

  textDiv.appendChild(h2);
  textDiv.appendChild(p);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("home-image");

  const img = document.createElement("img");
  img.src = "https://i.pinimg.com/736x/5d/70/74/5d707494c980b92f053797c2d36c56fa.jpg";
 // img.alt = "Imagen temática";
  img.classList.add("side-image");

  imageDiv.appendChild(img);

  container.appendChild(textDiv);
  container.appendChild(imageDiv);
  main.appendChild(container);
}


function showProjects() {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Mis Proyectos";

  const ul = document.createElement("ul");

  const projects = [
    { name: "To-Do List", url: "https://github.com/bertrandsilvana/To-do-List.git" },
    { name: "Gestor_proyectos", url: "https://github.com/bertrandsilvana/Gestor_de_Proyecto.git" },
    { name: "pr-actica_formulario", url: "https://github.com/bertrandsilvana/pr-ctica_formulario.git" },
    { name: "paises_mercosur", url: "https://github.com/florencialarreategui/paises_mercosur.git" }
  ];

  projects.forEach(proj => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = proj.url;
    link.target = "_blank";
    link.textContent = proj.name;

    li.appendChild(link);
    ul.appendChild(li);
  });

  main.appendChild(h2);
  main.appendChild(ul);
}


function showContact() {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Contacto";

  const form = document.createElement("form");

  const name = document.createElement("input");
  name.type = "text";
  name.placeholder = "Tu nombre";
  name.required = true;

  const email = document.createElement("input");
  email.type = "email";
  email.placeholder = "Tu email";
  email.required = true;

  const message = document.createElement("textarea");
  message.placeholder = "Tu mensaje";
  message.rows = 5;
  message.required = true;

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Enviar";

  form.append(name, email, message, submit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();   
    form.reset();
  });

  main.appendChild(h2);
  main.appendChild(form);
}

