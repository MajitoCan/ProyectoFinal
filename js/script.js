//FUNCIONES
// script para menú desplegable
$("#iconomenu").click(function () {
  $("#contenedormenu").toggleClass("abrir_menu");
});

$(".btn-ancla").click(function () {
  $("#contenedormenu").toggleClass("abrir_menu");
});

// script para slide de fotos
$(function () {
  $(".rslides").responsiveSlides({
    auto: true,
    nav: true,
    prevText: '<i class="fas fa-chevron-left"></i>',
    nextText: '<i class="fas fa-chevron-right"></i>',
  });
});

// acordeón Jquery
$(".acordeon-titulo").click(function () {
  var t = $(this);
  var tp = t.next();
  tp.slideToggle();

  // Alternar ícono
  var icono = t.find(".flecha");
  icono.toggleClass("fa-solid fa-chevron-up fa-solid fa-chevron-down");

  // Alternar clase activa (azul en el h2)
  t.toggleClass("activo");
});

// parallax contador
const maximo = 250;
const contadores = document.querySelectorAll(".numero");

contadores.forEach((elemento) => {
  let numero = 1;
  const intervalo = setInterval(() => {
    elemento.textContent = numero;
    numero++;
    if (numero > maximo) {
      clearInterval(intervalo);
    }
  }, 20);
});

// modal
$("#boton_modal").click(function (e) {
  e.preventDefault();
  $("#modal").addClass("mostrar");
});

$("#cerrar_modal").click(function () {
  $("#modal").removeClass("mostrar");
});

// Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  // Opciones
});

// animaciones al hacer scroll
new WOW().init();

//Formulario
const formulario = document.getElementById("encuesta");
const cajaMensaje = document.querySelector("#error")
  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica para manejar el envío del formulario

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      const nameRegex = /^[a-zA-Z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let valid = true;
      let errors = [];

      if (!name || !nameRegex.test(name)) {
        errors.push(
          "El nombre solo debe contener letras y no puede estar vacío."
        );
        valid = false;
      }

      if (!email || !emailRegex.test(email)) {
        errors.push("Correo electrónico no válido.");
        valid = false;
      }

      if (!message) {
        errors.push("El mensaje no puede estar vacío.");
        valid = false;
      }

      if (!valid) {
        cajaMensaje.innerHTML = errors.join("<br>");
        return;
      }

      // Si todo está bien, puedes enviar el formulario
    //   this.submit();
      alert("Formulario enviado");
    });
  } else {
    console.warn("Formulario no encontrado.");
  }
