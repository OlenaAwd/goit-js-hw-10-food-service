const refs = {
    switch: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  
};
  
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
  
localStorageTheme();
  
refs.switch.addEventListener('change', changeTheme);
  
function changeTheme() {
if (refs.body.className === Theme.LIGHT) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('storageTheme', Theme.DARK);
    } else {
      refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('storageTheme', Theme.LIGHT);
    }
}
  
function localStorageTheme() {
    const priorityTheme = localStorage.getItem('storageTheme');
    if (priorityTheme === null) {
      refs.body.classList.add(Theme.LIGHT);
    } else {
        refs.body.classList.add(priorityTheme);
    if (priorityTheme === Theme.DARK) {
        refs.switch.checked = 'true';
      }
    }
}