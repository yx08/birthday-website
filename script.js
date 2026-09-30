
let currentPage = 1;

const totalPages = 4;



/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageNumber) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const newPage =
        document.getElementById(
            `page${pageNumber}`
        );


    newPage.classList.add("active");

    currentPage = pageNumber;

}



function nextPage() {

    if (currentPage < totalPages) {

        showPage(currentPage + 1);

    }

}



function previousPage() {

    if (currentPage > 1) {

        showPage(currentPage - 1);

    }

}



/* =========================
   GIFT
========================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const giftMessage =
        document.getElementById("gift-text");

    const finalMessage =
        document.getElementById("final-message");


    if (
        gift.classList.contains("open")
    ) {

        return;

    }


    gift.classList.add("open");


    giftMessage.innerHTML =
        "A little message for you ❤️";


    setTimeout(() => {

        finalMessage
            .classList
            .remove("hidden");

        giftMessage.style.display =
            "none";

    }, 700);

}



/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.innerHTML = "♡";


    heart.style.position =
        "fixed";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.bottom =
        "-20px";


    heart.style.fontSize =
        (Math.random() * 15 + 10) +
        "px";


    heart.style.color =
        "#c6aaa5";


    heart.style.opacity =
        "0.5";


    heart.style.pointerEvents =
        "none";


    heart.style.zIndex =
        "0";


    document.body.appendChild(
        heart
    );


    const duration =
        Math.random() * 5000 + 5000;


    heart.animate(

        [

            {
                transform:
                    "translateY(0)",

                opacity: 0

            },

            {
                transform:
                    "translateY(-100vh)",

                opacity: 0.6

            }

        ],

        {

            duration:
                duration,

            easing:
                "linear"

        }

    );


    setTimeout(() => {

        heart.remove();

    }, duration);

}


setInterval(
    createHeart,
    1200
);

