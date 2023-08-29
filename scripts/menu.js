export default class Menu {
    constructor() {
        this.$menu = "menu";
        this.menu = document.querySelector(`.${this.$menu}`);
        this.menuItems = document.querySelector(".menu-container-hidden");

        this.render();
    }

    addMenuItem() {
        this.$menu = "close-menu";
        this.menuItems.className = "menu-container";
    }

    closeMenuItem() {
        this.$menu = "menu";
        this.menuItems.className = "menu-container-hidden";
    }

    render() {
        if (this.$menu === "menu") {
            this.menu.addEventListener("click", this.addMenuItem.bind(this));
        }
        if (this.$menu === "close-menu") {
            this.menu.addEventListener("click", this.closeMenuItem.bind(this));
        }
    }
}
