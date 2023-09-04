export default class News {
    constructor() {
        this.email = document.querySelector(".e-mail");
        this.subscribe = document.querySelector(".subscribe");
        this.success = document.querySelector(".successful-sub");
        this.$notEmail = document.querySelector(".not-email");

        this.render();
    }

    action() {
        this.email.value = "";
        this.success.hidden = false;
        this.$notEmail.hidden = true;
    }

    notEmail() {
        this.success.hidden = true;
        this.$notEmail.hidden = false;
    }

    toggleSubscribe() {
        if (this.email.value !== "") {
            this.action();
        } else if (this.email.value === "") {
            this.notEmail();
        }
    }

    render() {
        this.subscribe.addEventListener(
            "click",
            this.toggleSubscribe.bind(this)
        );
    }
}
