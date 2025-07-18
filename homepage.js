// Prevent text copying and interaction
document.addEventListener('contextmenu', (e) => {
  e.preventDefault(); // Block right-click menu
});
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
    e.preventDefault(); // Block Ctrl+C or Cmd+C
  }
});

// Theme toggle functionality
const themeToggleButton = document.getElementById('themeToggleButton');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggleButton.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

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
  sidebar.classList.toggle('active');
  hamburgerToggle.innerHTML = sidebar.classList.contains('active') ?
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Dropdown menu functionality
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});
