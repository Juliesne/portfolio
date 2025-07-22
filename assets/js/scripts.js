// Menu Mobile
let menuActive = document.querySelector('.menu-mobile');
let nav = document.querySelector('header nav');

menuActive.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    menuActive.querySelector('.btn-close').style.display = 'none';
    menuActive.querySelector('.btn-open').style.display = 'flex';
  } else {
    nav.classList.add('active');
    menuActive.querySelector('.btn-close').style.display = 'flex';
    menuActive.querySelector('.btn-open').style.display = 'none';
  }
});

// Slider
const testimonials = [
  {
    img: "./assets/img/alvin.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Alvin Kelvin",
    role: "Dev Full Stack"
  },
  {
    img: "./assets/img/pascal.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Pascal Willims",
    role: "UX Designer"
  },
  {
    img: "./assets/img/João.png",
    description: "Excelente profissional, muito dedicadaLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "João Pedro",
    role: "Gerente de Projetos"
  }
];

const container = document.getElementById("testimonial-container");
const navSlider = document.getElementById("testimonial-nav");
let current = 0;

function renderSlides() {
  container.innerHTML = "";
  navSlider.innerHTML = "";

  testimonials.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "slider-item";
    if (index !== current) slide.style.display = "none";

    slide.innerHTML = `
      <img src="${item.img}" alt="">
      <p class="description">${item.description}</p>
      <p class="name">${item.name}</p>
      <p class="role">${item.role}</p>
    `;
    container.appendChild(slide);

    const dot = document.createElement("span");
    dot.className = "dot";
    if (index === current) dot.classList.add("active");
    dot.addEventListener("click", () => {
      current = index;
      renderSlides();
    });
    navSlider.appendChild(dot);
  });
}

renderSlides();
// ⏱ Auto play: troca de slide a cada 5 segundos
setInterval(() => {
  current = (current + 1) % testimonials.length;
  renderSlides();
}, 5000); // 5000 ms = 5 segundos


// Copy email
    function copiarTexto() {
      const texto = document.getElementById("email").innerText;
      navigator.clipboard.writeText(texto)
        .then(() => {
          alert("Texto copiado: " + texto);
        })
        .catch(err => {
          console.error('Erro ao copiar:', err);
        });
    }