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

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

window.addEventListener('load', () => {
  // Remove highlight class on page load (reset state)
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.remove('highlight');
  });

  // Add click event to nav links
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Remove highlight from all links
      document.querySelectorAll('.nav-list a').forEach(l => l.classList.remove('highlight'));

      // Add highlight to clicked link
      e.currentTarget.classList.add('highlight');
    });
  });
});