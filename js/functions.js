// Selecciona los elementos de la barra de navegación que quieres resaltar
const navbarItems = document.querySelectorAll('.navbar-nav a');
// Recorre los elementos y agrega un event listener para cada uno
navbarItems.forEach(item => {
  // Extrae el nombre del enlace del href
  const sectionName = item.getAttribute('href').substring(1);
  // Selecciona el div que contiene la sección correspondiente
  const section = document.getElementById(sectionName);

  // Agrega un event listener para el evento scroll
  window.addEventListener('scroll', () => {
    // Obtiene la posición vertical del div que contiene la sección
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    // Obtiene la posición vertical actual del usuario
    const scrollPosition = window.scrollY;

    // Si la posición actual del usuario está dentro del rango de la sección,
    // agrega la clase 'active' al elemento de la barra de navegación correspondiente
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      item.classList.add('active');
      item.classList.add('text-info');
    } else {
      item.classList.remove('active');
      item.classList.remove('text-info');
    }
  });
});


const templateContainer = document.querySelector('.template-text-container');
const aboutImage = document.getElementById('about-image');


function changeBorder() {
  const firstH4 = templateContainer.querySelector('h4:first-child');

  if (window.innerWidth < 576) {
    templateContainer.classList.remove('border-start');
    templateContainer.classList.add('border-top');
    templateContainer.classList.add("pt-5");
    firstH4.classList.add('mt-5');
    aboutImage.classList.remove('w-75');
    aboutImage.classList.add('w-100');
  } else {
    templateContainer.classList.remove('border-top');
    templateContainer.classList.add('border-start');
    templateContainer.classList.remove("pt-5");
    firstH4.classList.remove('mt-5');
    aboutImage.classList.remove('w-100');
    aboutImage.classList.add('w-75');
  }
}

// Llama a la función cuando la ventana cambia de tamaño
window.addEventListener('resize', changeBorder);

// Llama a la función una vez para comprobar el tamaño de la ventana al cargar la página
changeBorder();

// Establece el ancho inicial de la imagen al cargar la página
if (window.innerWidth < 576) {
  aboutImage.style.width = "100%";
} else {
  aboutImage.style.width = "75%";
}