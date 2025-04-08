// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentURL = window.location.href;
  
    navLinks.forEach(link => {
      if (currentURL.includes(link.getAttribute('href'))) {
        link.style.textShadow = '0 0 8px #00ff99';
      }
    });
  
    // Login form effect if available
    const loginForm = document.querySelector('form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');
        if (username.value === '' || password.value === '') {
          alert('Please fill in all fields');
          return;
        }
        alert('Login successful (simulated)');
      });
    }
  
    // Button ripple effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        button.appendChild(ripple);
  
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  });