  // Bifold doors toggle
  const bifoldBtn = document.getElementById("see-more-bifold");
  const bifoldImages = document.querySelector(".bifold-images-more-images");

  bifoldBtn.addEventListener("click", function () {
    bifoldImages.classList.toggle("hidden");
    bifoldBtn.textContent = bifoldImages.classList.contains("hidden")
      ? "See More Images"
      : "See Less";
  });

  // Roof lanterns toggle
  const roofBtn = document.getElementById("see-more-roof-lantern");
  const roofImages = document.querySelector(".roof-lantern-more-images");

  roofBtn.addEventListener("click", function () {
    roofImages.classList.toggle("hidden");
    roofBtn.textContent = roofImages.classList.contains("hidden")
      ? "See More Images"
      : "See Less";
  });