// Toggling the visibility of the menu (if you have a button for a mobile view)
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-toggle"); // Assuming you have a button with this ID
    const menu = document.querySelector("#menu"); // Assuming the menu has this ID

    menuToggle.addEventListener("click", function () {
        // Toggle the menu visibility on click
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});
