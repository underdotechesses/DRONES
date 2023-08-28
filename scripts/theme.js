export default class Theme {
    constructor() {
        this.btn = document.querySelector(".change-theme");
        this.query = window.matchMedia("(prefers-color-scheme: dark)");

        // this.getBrouserColor();
        this.initialState("light-theme");
        this.render();
    }

    initialState(themeName) {
        localStorage.setItem("theme", themeName);
        document.documentElement.className = themeName;
    }

    getBrouserColor() {
        if (this.query.matches) {
            this.initialState("dark-theme");
        } else {
            this.initialState("light-theme");
        }
    }

    toggleTheme() {
        if (localStorage.getItem("theme") == "dark-theme") {
            this.initialState("light-theme");
        } else {
            this.initialState("dark-theme");
        }
    }

    render() {
        this.btn.addEventListener("click", this.toggleTheme.bind(this));
    }
}
