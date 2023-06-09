const btnTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const btnFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal() {
  modal.classList.toggle("aberto");
}

btnTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

btnFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});