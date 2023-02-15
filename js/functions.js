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
const secondtemplateContainer = document.querySelector('.second-template-text-container');



function changeBorder() {
  const firstH4 = templateContainer.querySelector('h4:first-child');
  const lastH4 = templateContainer.querySelector('h4:last-child');

  const backgroundImage = document.querySelector('.background-image-blue');
  const aboutImage = document.querySelector('.about-image');

  if (window.innerWidth < 576) {
    templateContainer.classList.remove('border-start');
    templateContainer.classList.add('border-top');
    templateContainer.classList.add("pt-5");

    secondtemplateContainer.classList.remove('border-end');
    secondtemplateContainer.classList.add('border-bottom');
    secondtemplateContainer.classList.add("pb-5");


    firstH4.classList.add('mt-5');
    lastH4.classList.add('mb-5');

    aboutImage.classList.remove('w-75');
    aboutImage.classList.add('w-100');

    backgroundImage.classList.remove('w-50');
    backgroundImage.classList.add('w-100');
  } else {
    templateContainer.classList.remove('border-top');
    templateContainer.classList.add('border-start');
    templateContainer.classList.remove("pt-5");

    secondtemplateContainer.classList.add('border-end');
    secondtemplateContainer.classList.remove('border-bottom');
    secondtemplateContainer.classList.remove("pb-5");


    firstH4.classList.remove('mt-5');
    lastH4.classList.remove('mb-5');


    aboutImage.classList.remove('w-100');
    aboutImage.classList.add('w-75');

    backgroundImage.classList.add('w-50');
    backgroundImage.classList.remove('w-100');
  }
}

// Llama a la función cuando la ventana cambia de tamaño
window.addEventListener('resize', changeBorder);

// Llama a la función una vez para comprobar el tamaño de la ventana al cargar la página
changeBorder();