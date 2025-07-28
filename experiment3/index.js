//add dark class to html
const html = document.querySelector("html");
const checkbox = document.querySelector("input[type=checkbox]");
checkbox.addEventListener("change", function () {
  html.classList.toggle("dark-theme");
});
