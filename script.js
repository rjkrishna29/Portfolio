document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to toggle between dark and light mode
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        
        // Toggle icon based on the theme
        const icon = toggleButton.querySelector('i');
        if (body.classList.contains('dark')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');  // Sun icon for light mode
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');  // Moon icon for dark mode
        }
    });

    // Keep active link highlighted
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});


