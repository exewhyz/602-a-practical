const canvas = document.querySelector("#canvas");
const color = document.querySelector("#color");
const size = document.querySelector("#size");
const clearButton = document.querySelector("#clear-btn");

const ctx = canvas.getContext("2d");

let isDrawing = false;

clearButton.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  ctx.strokeStyle = color.value;
  ctx.lineWidth = size.value;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", (event) => {
  if (!isDrawing) return;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseleave", () => (isDrawing = false));
