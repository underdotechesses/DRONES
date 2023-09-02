export default class Login {
    constructor() {
        this.btnLoginCross = document.querySelector(".login-cross");
        this.btnLogin = document.querySelector(".login");
        this.loginPlace = document.querySelector(".login-ul");
        this.loginText = document.querySelector(".login-li");
        this.passwordText = document.querySelector(".password");

        this.render();
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
    }
}
