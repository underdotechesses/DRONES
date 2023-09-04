export default class Login {
    constructor() {
        this.btnLoginOk = document.querySelector(".button-ok");
        this.btnLoginCross = document.querySelector(".login-cross");
        this.btnLogin = document.querySelector(".login");
        this.loginPlace = document.querySelector(".login-ul");
        this.loginText = document.querySelector(".login-li");
        this.passwordText = document.querySelector(".password");
        this.loginInput = document.querySelector(".login-input");
        this.passwordInput = document.querySelector(".password-input");
        this.notLogin = document.querySelector(".not-login");
        this.notPassword = document.querySelector(".not-password");

        this.render();
    }

    toggleLogin() {
        this.loginValue = this.loginInput.value;
        this.passwordValue = this.passwordInput.value;

        if (this.loginValue !== "" && this.passwordValue !== "") {
            this.closeSingInPlace();
            this.btnLogin.remove();

            this.mainUl = document.querySelector(".second-ul");
            this.loginCircle = document.createElement("li");
            this.loginSpan = document.createElement("span");

            this.loginCircle.setAttribute("class", "login-circle");

            this.mainUl.prepend(this.loginCircle);
            this.loginCircle.appendChild(this.loginSpan);

            this.loginLetter = this.loginValue.charAt(0);
            this.loginSpan.innerText = `${this.loginLetter}`;
        } else if (this.loginValue === "" && this.passwordValue === "") {
            this.notLogin.hidden = false;
            this.notPassword.hidden = false;
        } else if (this.loginValue !== "" && this.passwordValue === "") {
            this.notLogin.hidden = true;
            this.notPassword.hidden = false;
        } else if (this.passwordValue !== "" && this.loginValue === "") {
            this.notPassword.hidden = true;
            this.notLogin.hidden = false;
        }
    }

    addSingInPlace() {
        this.loginPlace.hidden = false;
    }

    closeSingInPlace() {
        this.loginPlace.hidden = true;
        this.notLogin.hidden = true;
        this.notPassword.hidden = true;
        this.loginInput.value = "";
        this.passwordInput.value = "";
    }

    option() {
        if (this.loginPlace.hidden === true) {
            this.addSingInPlace();
        } else if (this.loginPlace.hidden === false) {
            this.closeSingInPlace();
        }
    }

    render() {
        this.btnLogin.addEventListener("click", this.option.bind(this));
        this.btnLoginCross.addEventListener(
            "click",
            this.closeSingInPlace.bind(this)
        );
        this.btnLoginOk.addEventListener("click", this.toggleLogin.bind(this));
    }
}
