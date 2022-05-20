const icon = document.querySelector('.hamburg');
const link = document.querySelector('.header__navbar-list');
// get nav button id nav-toggle
const navToggle = document.getElementById('nav-toggle');

// Added click event listener to icon hamburg
icon.addEventListener('click', ()=>{
   if(link.style.display == 'flex' || link.style.display == '')
    link.style.display = 'none';
   else link.style.display = 'flex'
});

function hideNav() {
    // nav toggle is checkbox, uncheck it
   navToggle.checked = false;
   return true;
}