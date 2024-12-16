let slideIndex = 0;

// Função para mover o slide
function moveSlide(n) {
    let slides = document.querySelectorAll('.carousel img');
    slideIndex += n;

    // Verifica se o índice está fora dos limites e ajusta
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Esconde todas as imagens e exibe a imagem ativa
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Inicializa o carrossel
function startCarousel() {
    let slides = document.querySelectorAll('.carousel img');
    if (slides.length > 0) {
        slides[0].style.display = "block"; // Exibe a primeira imagem
    }
}

// Função para abrir o modal com a imagem clicada
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";  // Exibe o modal
    modalImg.src = imgElement.src;  // Define a imagem no modal como a clicada
    
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";  // Esconde o modal
}

// Chama a função para iniciar o carrossel ao carregar a página
window.onload = startCarousel;