export default class Login {
    constructor() {
        this.btnLoginOk = document.querySelector(".button-ok");
        this.btnLoginCross = document.querySelector(".login-cross");
        this.btnLogin = document.querySelector(".login");
        this.loginPlace = document.querySelector(".login-ul");
        this.loginText = document.querySelector(".login-li");
        this.passwordText = document.querySelector(".password");

        this.loginValue = this.loginText.value;
        this.passwordValue = this.passwordText.value;

        this.render();
    }

    toggleLogin() {
        this.closeSingInPlace();
        this.btnLogin.remove();

        this.mainUl = document.querySelector(".second-ul");
        this.loginCircle = document.createElement("li");
        this.loginSpan = document.createElement("span");

        this.loginCircle.setAttribute("class", "login-circle");

        this.mainUl.prepend(this.loginCircle);
        this.loginCircle.appendChild(this.loginSpan);
    }

    addSingInPlace() {
        this.loginPlace.hidden = false;
    }

    closeSingInPlace() {
        this.loginPlace.hidden = true;
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
