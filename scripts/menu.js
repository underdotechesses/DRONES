export default class Menu {
    constructor() {
        this.menu = document.querySelector(".btn-menu");
        this.menuItems = document.querySelector(".menu-ul");

        this.render();
    }

    addMenuItem() {
        this.menuItems.removeAttribute("hiddden");
    }

    closeMenuItem() {
        this.menuItems.setAttribute("hiddden");
    }

    render() {
        if (this.menuItems.hasAttribute("hidden")) {
            this.menu.addEventListener("click", this.addMenuItem.bind(this));
        } else {
            this.menu.addEventListener("click", this.closeMenuItem.bind(this));
        }
    }
}
