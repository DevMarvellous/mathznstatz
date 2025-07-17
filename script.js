const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(dark) {
    document.body.classList.toggle('dark', dark);
    themeIcon.textContent = dark ? '🌙' : '🌞';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Load theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else {
    setTheme(prefersDark);
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    setTheme(!isDark);
});