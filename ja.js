


// 






function toggleMenu() {
    var menu = document.getElementById("moreMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Hide dropdown when clicking outside
document.addEventListener("click", function(event) {
    var menu = document.getElementById("moreMenu");
    var dots = document.querySelector(".dots");

    if (!menu.contains(event.target) && !dots.contains(event.target)) {
        menu.style.display = "none";
    }
});

