export default class Theme {
    constructor() {
        this.btn = document.querySelector(".change-theme");

        this.render();
    }

    initialState(themeName) {
        localStorage.setItem("theme", themeName);
        document.documentElement.className = themeName;
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
