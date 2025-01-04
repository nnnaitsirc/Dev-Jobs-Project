const darkModeToggle = document.getElementById("check");

// Check if dark mode is enabled in localStorage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Set initial dark mode state
if (isDarkMode) {
  document.body.classList.add("darkmode");
  toggleDarkModeElements(true);
}

darkModeToggle.addEventListener("click", () => {
  // Toggle dark mode class on body
  document.body.classList.toggle("darkmode");

  // Toggle dark mode class on elements
  toggleDarkModeElements(document.body.classList.contains("darkmode"));

  // Update localStorage with current dark mode state
  localStorage.setItem("darkMode", document.body.classList.contains("darkmode"));
});

function toggleDarkModeElements(isDarkMode) {
  const elementsToToggle = [
    document.querySelector(".query-container"),
    document.getElementById("title"),
    document.getElementById("location"),
    ...document.querySelectorAll(".job-ad"),
    document.getElementById("role"),
    document.querySelector(".login-form")
  ];

  elementsToToggle.forEach((element) => {
    if (element) {
      element.classList.toggle("darkmode-elements", isDarkMode);
  }});
}
