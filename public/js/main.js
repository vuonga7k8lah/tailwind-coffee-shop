// author: vuongkma

const topMenu = document.getElementById("lhv-menu-top");
const topMenuToggle = document.getElementById("lhv-toggle-menu-top");

document.addEventListener("click", (e) => {
    if (topMenuToggle.contains(e.target)) {
        //click to toggle
        topMenu.classList.toggle("hidden");
        topMenu.classList.toggle("lhv-menu-expanded");
    } else {
        //click outside toggle
        if (topMenu.classList.contains("lhv-menu-expanded")) {
            topMenu.classList.remove("lhv-menu-expanded");
            topMenu.classList.add("hidden");
        }
    }
});
