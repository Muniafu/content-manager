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


// Get all elements with the class name 'angle'
var angleImages = document.querySelectorAll('.angle');

// Add click event listeners to each image
angleImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the corresponding dropdown menu for this image
        var dropdownMenu = this.parentElement.querySelector('.dropdown');

        // Toggle the display property of the dropdown menu
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
        } else {
            dropdownMenu.style.display = "none";
        }
    });
});

var angleImages = document.querySelectorAll('.angle');
const angleElem = document.getElementById("expand_less")
 // Get the dropdown menu
 var dropdownMenu = document.getElementById('dropdownMenu');

  // Add click event listener to the expand less image
  angleElem.addEventListener('click', function() {
    // Hide the dropdown menu
    dropdownMenu.style.display = "none";

    // Show the expand more image
    angleImages.style.display = "block";
});
