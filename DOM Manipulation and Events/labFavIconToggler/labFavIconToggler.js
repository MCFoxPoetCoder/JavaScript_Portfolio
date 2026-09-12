const btns = document.querySelectorAll(".favorite-icon");

console.log(document.getElementById("button-1").classList)

function toggleFilled (icon) {
  icon.classList.toggle("filled");
  console.log(document.getElementById("button-1").classList);
  if (icon.classList.contains("filled")) {
    icon.innerHTML = "&#10084";
  } else {
    icon.innerHTML = "&#9825;";
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => toggleFilled(btn))
})
