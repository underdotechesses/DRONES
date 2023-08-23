export default class Menu {
    constructor() {
        this.menu = document.querySelector(".menu");
        this.menuItems = document.querySelector(".menu-container-hidden");
        this.close = document.querySelector('.close-tag')

        this.render();
    }

    addMenuItem() {
        this.menu.className = "menu-hidden";
        this.menuItems.className = "menu-container";
    }

    closeMenuItem() {
        this.menuItems.className = 'menu-container-hidden';
        this.menu.className = 'menu';
    }

    render() {
        this.menu.addEventListener("click", this.addMenuItem.bind(this));

        this.close.addEventListener('click', this.closeMenuItem.bind(this));
    }
}
