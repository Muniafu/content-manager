const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList  = isOpen 
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'
}

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  backToTopBtn.style.display = "block";
} else {
  backToTopBtn.style.display = "none";
}
});

backToTopBtn.addEventListener("click", () => {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


/*  TO BE DELETED  */
 