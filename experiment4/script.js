const textarea = document.querySelector("#textarea");

// const maxLength = textarea.getAttribute("maxlength");

const counter = document.querySelector("#counter");
const count = document.querySelector("#count");

textarea.addEventListener("input", (event) => {
  const maxLength = event.target.maxLength;
  const currentLength = event.target.value.length;
  count.innerText = currentLength;
  if (currentLength >= maxLength) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
});
