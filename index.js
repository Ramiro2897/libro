const noBtn = document.getElementById("noBtn");
const siBtn = document.getElementById("siBtn");
const card = document.querySelector(".card");
const overlay = document.querySelector(".overlay");

  noBtn.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  })

  // --------------------------------

  siBtn.addEventListener("click", () => { 
  overlay.style.display = "block";
  card.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.pointerEvents = "none";
  card.style.pointerEvents = "auto";
  })

  function cerrarCard() {
  card.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";
  document.body.style.pointerEvents = "auto";
}

function descargarLibro() {
  const url = './ELBRILLO-DE-LAS-LUCIERNAGAS.epub';
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ELBRILLO-DE-LAS-LUCIERNAGAS.epub';  
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

