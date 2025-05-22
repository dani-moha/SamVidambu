
function toggleReadMore(button) {
  const moreText = button.parentElement.querySelector(".more-text");
  const isVisible = moreText.style.display === "block";

  moreText.style.display = isVisible ? "none" : "block";
  button.textContent = isVisible ? "Read More" : "Read Less";
}

