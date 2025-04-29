// Function to store and apply the selected theme
function setTheme(theme) {
    localStorage.setItem('userTheme', theme);
    applyTheme(theme);
  }

  // Function to apply the theme and animate the transition
  function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }

  // On page load, retrieve theme from localStorage
  window.onload = function () {
    const storedTheme = localStorage.getItem('userTheme') || 'light';
    applyTheme(storedTheme);
  };