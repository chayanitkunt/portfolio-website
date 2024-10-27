
document.addEventListener("DOMContentLoaded", () => {
    const themes = {
        default: () => document.documentElement.className = '',
        red: () => document.documentElement.className = 'red-theme',
        orange: () => document.documentElement.className = 'orange-theme',
        green: () => document.documentElement.className = 'green-theme',
        blue: () => document.documentElement.className = 'blue-theme',
        pink: () => document.documentElement.className = 'pink-theme'
    };

   
    document.getElementById("default-theme").addEventListener("click", themes.default);
    document.getElementById("red-theme").addEventListener("click", themes.red);
    document.getElementById("orange-theme").addEventListener("click", themes.orange);
    document.getElementById("green-theme").addEventListener("click", themes.green);
    document.getElementById("blue-theme").addEventListener("click", themes.blue);
    document.getElementById("pink-theme").addEventListener("click", themes.pink);


    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' }); 
        });
    });
});
