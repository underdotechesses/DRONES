export default class Slider {
    static NUMBER_OF_PICTURES = [
        "first-picture",
        "second-picture",
        "third-picture",
        "fourth-picture",
        "fifth-picture",
        "sixth-picture",
    ];

    constructor() {
        this.picture = document.querySelector(".picture");
        this.rootEl = document.querySelector(".first-section-second-div");
        this.buttons = this.rootEl.querySelectorAll(".circle");
        this.$prev = this.rootEl.querySelector(".prev");
        this.$next = this.rootEl.querySelector(".next");
        this.current = null;

        this.render();
    }

    getFirstPicture() {
        this.$current = this.rootEl.querySelector(".current--circle");

        this.$current.classList.remove("current--circle");
        this.buttons[0].classList.add("current--circle");
        this.index = 0;

        this.removeClassByDiv();
        this.picture.classList.add(NUMBER_OF_PICTURES[this.index]);
        this.current = NUMBER_OF_PICTURES[this.index];
    }

    getSecondPicture() {
        this.$current = this.rootEl.querySelector(".current--circle");

        this.$current.classList.remove("current--circle");
        this.buttons[1].classList.add("current--circle");
        this.index = 1;

        this.removeClassByDiv();
        this.picture.classList.add(NUMBER_OF_PICTURES[this.index]);
        this.current = NUMBER_OF_PICTURES[this.index];
    }

    getThirdPicture() {
        this.$current = this.rootEl.querySelector(".current--circle");

        this.$current.classList.remove("current--circle");
        this.buttons[2].classList.add("current--circle");
        this.index = 2;

        this.removeClassByDiv();
        this.picture.classList.add(NUMBER_OF_PICTURES[this.index]);
        this.current = NUMBER_OF_PICTURES[this.index];
    }

    getFourthPicture() {
        this.$current = this.rootEl.querySelector(".current--circle");

        this.$current.classList.remove("current--circle");
        this.buttons[3].classList.add("current--circle");
        this.index = 3;

        this.removeClassByDiv();
        this.picture.classList.add(NUMBER_OF_PICTURES[this.index]);
        this.current = NUMBER_OF_PICTURES[this.index];
    }

    getFifthPicture() {
        this.$current = this.rootEl.querySelector(".current--circle");

        this.$current.classList.remove("current--circle");
        this.buttons[4].classList.add("current--circle");
        this.index = 4;

        this.removeClassByDiv();
        this.picture.classList.add(NUMBER_OF_PICTURES[this.index]);
        this.current = NUMBER_OF_PICTURES[this.index];
    }

    getSixthPicture() {
        this.$current = this.rootEl.querySelector(".current--circle");

        this.$current.classList.remove("current--circle");
        this.buttons[5].classList.add("current--circle");
        this.index = 5;

        this.removeClassByDiv();
        this.picture.classList.add(NUMBER_OF_PICTURES[this.index]);
        this.current = NUMBER_OF_PICTURES[this.index];
    }

    removeClassByDiv() {
        if (!this.current) {
            this.picture.classList.remove("second-picture");
        } else {
            this.picture.classList.remove(this.current);
        }
    }

    prevElement() {
        this.buttons[this.index].classList.remove("current--circle");
        this.buttons[this.index - 1].classList.add("current--circle");

        this.index -= 1;
        this.$current = this.buttons[this.index];
    }

    render() {
        this.$prev.addEventListener("click", this.prevElement.bind(this));

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
