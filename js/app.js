const texts = ["Student", "Blogger", "Frontend Dev"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
})();

// --------------------------------------------------------------------

const listFixed = document.querySelector(".list-description");
const listFixeddua = document.querySelector(".list-descriptionDua");

window.onscroll = function () {
    position();
};

function position() {
    if (
        document.body.scrollTop > 550 ||
        document.documentElement.scrollTop > 550
    ) {
        listFixed.style.display = "none";
        listFixeddua.style.display = "block";
    } else {
        listFixed.style.display = "block";
        listFixeddua.style.display = "none";
    }

    
}

// -------------------------------------------------------

const buttonDown = document.querySelector(".tab-to-bottom");
const aboutme = document.querySelector(".aboutme");

buttonDown.addEventListener("click", () => {
    aboutme.scrollIntoView();
});

// -----------------------------------------------------------

const links = document.querySelectorAll(".scroll_to");

links.forEach((item) => {
    item.addEventListener("click", () => {
        const ke = document.getElementById(item.getAttribute("data-link"));
        ke.scrollIntoView();
    })
})

// ----------------------------------------------------------

const buttonResposive = document.querySelector(".box-button-resposive");
const listResponsive = document.querySelector(".list-responsive");

buttonResposive.addEventListener("click", () => {    
    listResponsive.classList.toggle("active");
});

// ------------------------------------

const close = document.querySelectorAll(".to-close");

close.forEach((listClose) => {
    listClose.addEventListener("click", () => {
        listResponsive.classList.add("close");
        listResponsive.classList.remove("active");
        setTimeout(() => {
            listResponsive.classList.remove("close");``
        }, 500)
    })
})