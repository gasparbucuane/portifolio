document.addEventListener('DOMContentLoaded', function () {
    // Selecionar elementos
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
  
    // Alternar menu de navegação em dispositivos móveis
    menuIcon.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  
    // Fechar o menu quando um link é clicado
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth < 768) {
          navbar.classList.remove('active');
        }
      });
    });
  
    // Fechar o menu se o usuário clicar fora do menu
    document.addEventListener('click', function (event) {
      if (window.innerWidth < 768 && !navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active');
      }
    });
  });
  