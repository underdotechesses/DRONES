export default class Menu {
    constructor() {
        this.menu = document.querySelector(".close-menu");
        this.menuItems = document.querySelector(".menu-container-hidden");
        this.render();
    }

    addMenuItem() {
        this.menuItems.className = "menu-container";
        this.menu.classList.add("menu");
    }

    closeMenuItem() {
        this.menuItems.className = "menu-container-hidden";
        this.menu.classList.remove("menu");
    }

    render() {
        if (this.menu.classList.contains("menu")) {
            this.menu.addEventListener("click", this.closeMenuItem.bind(this));
        } else {
            this.menu.addEventListener("click", this.addMenuItem.bind(this));
        }
    }
}
