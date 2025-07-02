// ✅ VALIDACIÓN DE FORMULARIO
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".formulario-contacto");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const motivo = document.getElementById("motivo");
    const mensaje = document.getElementById("mensaje");
    formulario.addEventListener("submit", (e) => {
    if (
        nombre.value.trim() === "" ||
        email.value.trim() === "" ||
        motivo.value === "" ||
        mensaje.value.trim() === ""
    ) {
        e.preventDefault();
        alert("🚫 Por favor completa todos los campos antes de enviar.");
    }
    });
  // ✨ EFECTO DE ANIMACIÓN AL HACER SCROLL
    const animar = (entradas, observer) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
        entrada.target.classList.add("activo");
        observer.unobserve(entrada.target);
        }
    });
    };
    const opciones = {
    threshold: 0.1,
    };
    const observador = new IntersectionObserver(animar, opciones);
    const seccionesAnimadas = document.querySelectorAll(".info, .producto, .testimonio, .table-section");
    seccionesAnimadas.forEach((seccion) => {
    observador.observe(seccion);
    });
  // 🟢 MENSAJE DE WHATSAPP AUTOMÁTICO
    const btnWhatsapp = document.querySelector(".btn-whatsapp-grande");
    btnWhatsapp.addEventListener("click", () => {
    const mensaje = encodeURIComponent("¡Hola! Quisiera más información sobre sus servicios 👷‍♂️🏗️");
    btnWhatsapp.href = `https://wa.me/59167525973?text=${mensaje}`;
    });
});