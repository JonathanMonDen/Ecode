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
  const footerList = document.querySelector('.footer-list');
  const secondfooterList = document.querySelector('.second-footer-list');
  const footerlogo = document.querySelector('.footer-logo');



  if (window.innerWidth < 576) {
   
    footerList.classList.add('d-none');
    secondfooterList.classList.add('d-none');

    footerlogo.classList.remove('w-25');
    footerlogo.classList.add('w-100');
  } else {
  
    footerList.classList.remove('d-none');
    secondfooterList.classList.remove('d-none');

    footerlogo.classList.add('w-25');
    footerlogo.classList.remove('w-100');
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