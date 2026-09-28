document.addEventListener("DOMContentLoaded", () => {

    const opening = document.getElementById("opening");
    const beginButton = document.getElementById("beginButton");

    const chapterOne = document.getElementById("chapterOne");
    const chapterTwo = document.getElementById("chapterTwo");
    const chapterThree = document.getElementById("chapterThree");

    const letter = document.getElementById("letter");
    const final = document.getElementById("final");

    const heartsContainer =
        document.getElementById("hearts");

    const sparklesContainer =
        document.getElementById("sparkles");


    /* =====================================
       CREATE SPARKLES
    ===================================== */

    function createSparkles() {

        for (let i = 0; i < 35; i++) {

            const sparkle =
                document.createElement("span");

            sparkle.className = "sparkle";

            sparkle.textContent =
                Math.random() > .5 ? "✦" : "·";

            sparkle.style.left =
                Math.random() * 100 + "%";

            sparkle.style.top =
                Math.random() * 100 + "%";

            sparkle.style.fontSize =
                Math.random() * 12 + 7 + "px";

            sparkle.style.animationDelay =
                Math.random() * 4 + "s";

            sparklesContainer.appendChild(
                sparkle
            );
        }
    }


    /* =====================================
       FLOATING HEARTS
    ===================================== */

    function createHeart() {

        const heart =
            document.createElement("span");

        heart.className = "heart";

        const hearts = [
            "♡",
            "♥",
            "♡",
            "❣",
            "❤"
        ];

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.random() * 18 + 10 + "px";

        const duration =
            Math.random() * 7 + 7;

        heart.style.animationDuration =
            duration + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }


    setInterval(createHeart, 900);


    /* =====================================
       SHOW SECTION
    ===================================== */

    function showSection(section) {

        section.classList.remove("hidden");

        setTimeout(() => {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);
    }


    /* =====================================
       OPEN HEART
    ===================================== */

    beginButton.addEventListener(
        "click",
        () => {

            createHeartExplosion();

            setTimeout(() => {

                opening.style.display =
                    "none";

                showSection(chapterOne);

            }, 700);
        }
    );


    /* =====================================
       NEXT BUTTONS
    ===================================== */

    const nextButtons =
        document.querySelectorAll(
            ".next-button"
        );

    nextButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const nextId =
                    button.dataset.next;

                let nextSection;

                if (nextId === "chapterTwo") {
                    nextSection = chapterTwo;
                }

                if (nextId === "chapterThree") {
                    nextSection = chapterThree;
                }

                if (nextId === "letter") {
                    nextSection = letter;
                }

                if (nextSection) {

                    createHeartExplosion();

                    setTimeout(() => {
                        showSection(nextSection);
                    }, 500);
                }

            }
        );

    });


    /* =====================================
       FINAL BUTTON
    ===================================== */

    const finalButton =
        document.getElementById("finalButton");

    finalButton.addEventListener(
        "click",
        () => {

            createHeartExplosion();

            setTimeout(() => {

                showSection(final);

                startFinalHearts();

            }, 500);

        }
    );


    /* =====================================
       HEART EXPLOSION
    ===================================== */

    function createHeartExplosion() {

        for (let i = 0; i < 25; i++) {

            const heart =
                document.createElement("span");

            heart.textContent =
                Math.random() > .5
                    ? "♥"
                    : "♡";

            heart.style.position =
                "fixed";

            heart.style.left =
                "50%";

            heart.style.top =
                "50%";

            heart.style.zIndex =
                "9999";

            heart.style.pointerEvents =
                "none";

            heart.style.color =
                Math.random() > .5
                    ? "#ff9eb8"
                    : "#ffc6d5";

            heart.style.fontSize =
                Math.random() * 18 + 10 + "px";

            const angle =
                Math.random() *
                Math.PI * 2;

            const distance =
                Math.random() * 300 + 100;

            const x =
                Math.cos(angle) *
                distance;

            const y =
                Math.sin(angle) *
                distance;

            heart.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            )
                            scale(1.2)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        Math.random() * 900 + 900,

                    easing:
                        "cubic-bezier(.17,.67,.83,.67)"
                }
            );

            document.body.appendChild(
                heart
            );

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }
    }


    /* =====================================
       FINAL HEARTS
    ===================================== */

    function startFinalHearts() {

        for (let i = 0; i < 30; i++) {

            setTimeout(
                createHeart,
                i * 180
            );
        }
    }


    /* =====================================
       START
    ===================================== */

    createSparkles();

});