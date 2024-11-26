// Example: Add a button to reveal hidden messages
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = "Show More Messages";
    button.style.margin = "20px auto";
    button.style.display = "block";
  
    document.body.appendChild(button);
  
    button.addEventListener('click', () => {
      alert('This feature will show more messages soon!');
    });
  });
  