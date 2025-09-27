
document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("welcomeText");
  const colors = ["#0066cc", "#e91e63", "#2ecc71", "#f39c12"];
  let index = 0;

  setInterval(() => {
    text.style.color = colors[index];
    index = (index + 1) % colors.length;
  }, 2000);
});
