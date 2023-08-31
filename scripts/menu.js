export default class Menu {
    constructor() {
        this.menu = document.querySelector(".btn-menu");
        this.menuItems = document.querySelector(".menu-ul");

        this.render();
    }

    addMenuItemClick() {
        this.menuItems.hidden = false;
    }

    closeMenuItemClick() {
        this.menuItems.hidden = true;
    }

    option() {
        if (this.menuItems.hidden === true) {
            this.addMenuItemClick();
        } else if (this.menuItems.hidden === false) {
            this.closeMenuItemClick();
        }
    }

    render() {
        this.menu.addEventListener("click", this.option.bind(this));
    }
}
