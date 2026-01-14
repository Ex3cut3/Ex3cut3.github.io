const container = document.getElementById('progress-container');
let dragged;

container.addEventListener('dragstart', (e) => {
  dragged = e.target;
  e.target.style.opacity = 0.5;
});

container.addEventListener('dragend', (e) => {
  e.target.style.opacity = "";
});

container.addEventListener('dragover', (e) => {
  e.preventDefault();
});

container.addEventListener('drop', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('card')) {
    container.insertBefore(dragged, e.target.nextSibling);
  }
});
