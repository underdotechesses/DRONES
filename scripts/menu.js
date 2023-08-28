export default class Menu {
    constructor() {
        this.menu = document.querySelector(".menu");
        this.menuItems = document.querySelector(".menu-container-hidden");

        this.render();
    }

    addMenuItem() {
        this.menuItems.className = "menu-container";
        this.menu.className = "close-menu";
    }

    closeMenuItem() {
        this.menuItems.className = "menu-container-hidden";
        this.menu.className = "menu";
    }

    render() {
        this.menu.addEventListener("click", this.addMenuItem.bind(this));

        if (this.menu.className !== "menu") {
            this.menu.addEventListener("click", this.closeMenuItem.bind(this));
        }
    }
}
