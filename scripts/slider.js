export default class Slider {
    constructor() {
        this.picture = document.querySelector(".picture");
        this.rootEl = document.querySelector(".first-section-second-div");
        this.$current = this.rootEl.querySelector(".current--circle");
        this.buttons = this.rootEl.querySelectorAll(".circle");
        this.$prev = this.rootEl.querySelector(".prev");
        this.$next = this.rootEl.querySelector(".next");
        this.current = null;

        this.render();
    }

    getFirstPicture() {
        this.$current.classList.remove("current--circle");
        this.buttons[0].classList.add("current--circle");

        this.removeClassByDiv();
        this.picture.classList.add("first-picture");
        this.current = "first-picture";
    }

    getSecondPicture() {
        this.$current.classList.remove("current--circle");
        this.buttons[1].classList.add("current--circle");

        this.removeClassByDiv();
        this.picture.classList.add("second-picture");
        this.current = "second-picture";
    }

    getThirdPicture() {
        this.$current.classList.remove("current--circle");
        this.buttons[2].classList.add("current--circle");

        this.removeClassByDiv();
        this.picture.classList.add("third-picture");
        this.current = "third-picture";
    }

    getFourthPicture() {
        this.$current.classList.remove("current--circle");
        this.buttons[3].classList.add("current--circle");

        this.removeClassByDiv();
        this.picture.classList.add("fourth-picture");
        this.current = "fourth-picture";
    }

    getFifthPicture() {
        this.$current.classList.remove("current--circle");
        this.buttons[4].classList.add("current--circle");

        this.removeClassByDiv();
        this.picture.classList.add("fifth-picture");
        this.current = "fifth-picture";
    }

    getSixthPicture() {
        this.$current.classList.remove("current--circle");
        this.buttons[1].classList.add("current--circle");

        this.removeClassByDiv();
        this.picture.classList.add("sixth-picture");
        this.current = "sixth-picture";
    }

    removeClassByDiv() {
        if (!this.current) {
            this.picture.classList.remove("second-picture");
        } else {
            this.picture.classList.remove(this.current);
        }
    }

    render() {
        this.buttons[0].addEventListener(
            "click",
            this.getFirstPicture.bind(this)
        );
        this.buttons[1].addEventListener(
            "click",
            this.getSecondPicture.bind(this)
        );
        this.buttons[2].addEventListener(
            "click",
            this.getThirdPicture.bind(this)
        );
        this.buttons[3].addEventListener(
            "click",
            this.getFourthPicture.bind(this)
        );
        this.buttons[4].addEventListener(
            "click",
            this.getFifthPicture.bind(this)
        );
        this.buttons[5].addEventListener(
            "click",
            this.getSixthPicture.bind(this)
        );
    }
}
