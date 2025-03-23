function showSection(sectionId) {
    const sections = ['home', 'about', 'projects', 'contact'];
    sections.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Add functionality here to toggle a mobile menu if needed
    alert('Menu toggled!'); // Placeholder
});

// Show home section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});