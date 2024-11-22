document.addEventListener("DOMContentLoaded", () => {
  const loadingMessage = document.getElementById("loadingMessage");
  const hoverArea = document.getElementById("hoverArea");
  const timerMessage = document.getElementById("timerMessage");
  const formMessage = document.getElementById("formMessage");

  // 1. A user clicks on a link
  document.getElementById("link").addEventListener("click", () => {
    alert("Link clicked!");
  });

  // 2. Page finished loading
  setTimeout(() => {
    loadingMessage.textContent = "Page has finished loading!";
  }, 500); // Simulate delay for loading message

  // 3. Mouse cursor enters an area
  hoverArea.addEventListener("mouseenter", () => {
    hoverArea.style.backgroundColor = "lightgreen";
    alert("Mouse entered the hover area!");
  });

  hoverArea.addEventListener("mouseleave", () => {
    hoverArea.style.backgroundColor = "lightblue";
  });

  // 4. A preset amount of time elapses
  setTimeout(() => {
    timerMessage.textContent = "5 seconds have passed!";
  }, 5000);

  // 5. A form is being submitted
  document.getElementById("sampleForm").addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Form has been submitted!";
  });
});
