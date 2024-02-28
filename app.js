const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () =>{
    //change the theme of the website
    document.body.classList.toggle("dark");
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}