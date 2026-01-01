document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('menu--active');
      burger.classList.toggle('menuBU--active');
    });
  });
  