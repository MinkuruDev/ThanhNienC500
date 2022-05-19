const icon = document.querySelector('.hamburg');
const link = document.querySelector('.header__navbar-list');

// Added click event listener to icon hamburg
icon.addEventListener('click', ()=>{
   if(link.style.display == 'flex' || link.style.display == '')
    link.style.display = 'none';
   else link.style.display = 'flex'
})