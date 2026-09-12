const lightboxModal = document.querySelector(".lightbox")
const lightboxImg = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightboxModal.style.display = "flex";

    let imgSrc = item.getAttribute("src");
    let thmb = item.getAttribute("src").indexOf("-thumbnail");
    imgSrc = imgSrc.slice(0, thmb) + imgSrc.slice(thmb + "-thumbnail".length)
    lightboxImg.setAttribute("src", imgSrc)
  })
});

closeBtn.addEventListener("click", () => {
  lightboxModal.style.display = "none";
})

lightboxModal.addEventListener("click", () => {
  if (event.target !== lightboxImg)
  {lightboxModal.style.display = "none";}
})