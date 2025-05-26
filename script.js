// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const accessibilityButton = document.getElementById('accessibility-button');
    const accessibilityMenu = document.getElementById('accessibility-menu');
    const body = document.body;
    let fontSize = 1;

    if (menuButton) {
        menuButton.addEventListener('click', function() {
            alert('Funcionalidade do Menu será implementada aqui!');
        });
    }

    // Controlar a visibilidade do menu de acessibilidade
    if (accessibilityButton && accessibilityMenu) {
        accessibilityButton.addEventListener('click', function() {
            accessibilityMenu.classList.toggle('open');
        });
    }

    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const toggleContrastButton = document.getElementById('toggle-contrast');

    if (increaseFontButton) {
        increaseFontButton.addEventListener('click', function() {
            fontSize += 0.1;
            body.style.fontSize = `${fontSize}em`;
        });
    }

    if (decreaseFontButton) {
        decreaseFontButton.addEventListener('click', function() {
            if (fontSize > 0.7) {
                fontSize -= 0.1;
                body.style.fontSize = `${fontSize}em`;
            }
        });
    }

    if (toggleContrastButton) {
        toggleContrastButton.addEventListener('click', function() {
            body.classList.toggle('high-contrast');
        });
    }

    // Scroll suave para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Script JavaScript carregado com funcionalidades de acessibilidade e scroll suave!");
});