// Configuração do Swiper
var swiper = new Swiper(".carousel", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Função para abrir o modal
function openModal(imageSrc) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageSrc;

  // Pausa o autoplay do Swiper
  swiper.autoplay.stop();
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";

  // Reinicia o autoplay do Swiper
  swiper.autoplay.start();
}

// Adiciona evento de clique nas imagens do carrossel
var slides = document.querySelectorAll(".swiper-slide img");
slides.forEach(function (img) {
  img.addEventListener("click", function () {
    openModal(this.src);
  });
});

// Adiciona evento de clique no botão de fechar do modal
var closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeModal);

// Fecha o modal se o usuário clicar fora da imagem
var modal = document.getElementById("imageModal");
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
