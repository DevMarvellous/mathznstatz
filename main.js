// Theme toggle functionality
const themeToggleButton = document.getElementById('themeToggleButton'); // Renamed to avoid conflict
const savedTheme = localStorage.getItem('theme') || 'light'; // Load saved theme
document.documentElement.setAttribute('data-theme', savedTheme); // Set initial theme
themeToggleButton.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>'; // Set initial icon

themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  }
});

// Hamburger menu functionality
const hamburgerToggle = document.getElementById('hamburgerToggle');
const sidebar = document.getElementById('sidebar');
hamburgerToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Toggle sidebar visibility
  hamburgerToggle.innerHTML = sidebar.classList.contains('active') ?
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>'; // Switch icon
});