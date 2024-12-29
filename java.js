// Set up background color transitions
let colors = ['#6a064ca9', '#6a064ca9', '#6a064ca9', '#6a064ca9', '#6a064ca9'];
let currentIndex = 0;

function changeBackground() {
  document.body.style.transition = 'background 3s ease';
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackground, 4000);

let phraseIndex = 0;
const textContainer = document.createElement('div');
textContainer.id = 'seductive-text';
document.body.appendChild(textContainer);

function updateText() {
  textContainer.innerText = phrases[phraseIndex];
  textContainer.style.opacity = 1;
  setTimeout(() => {
    textContainer.style.opacity = 0;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }, 3000);
}

setInterval(updateText, 4000);

// Create hover interaction for romantic words
const romanticWords = ['Desire', 'Passion', 'Ecstasy', 'Intimacy', 'Fire'];
romanticWords.forEach(word => {
  const span = document.createElement('span');
  span.innerText = word;
  span.className = 'hover-word';
  span.addEventListener('mouseenter', () => {
    span.style.color = '#ff6b81';
    span.style.transform = 'scale(1.2)';
  });
  span.addEventListener('mouseleave', () => {
    span.style.color = '#fff';
    span.style.transform = 'scale(1)';
  });
  textContainer.appendChild(span);
});

// Back to Menu function
function goBack() {
  window.location.href = "index.html";
}
