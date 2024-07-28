function downArrow() {
    var container = document.getElementById("lottie-container").children[0];

    gsap.from(container, {
        duration: 1,
        opacity: 0,
        translateY: -400,
        ease: "power4.out",
        delay: 2.2,
    });
}

function introSectionHeadings() {
    gsap.registerPlugin(TextPlugin);

    var mainText = document.getElementById("introH1");
    var heading1 = "Aishwarya";
    var chars = heading1.split("");
    
    chars.forEach((char, index) => {
        var span = document.createElement("span");
        span.innerText = char;
        span.style.opacity = 1;
        span.style.width = "auto";
        span.style.position = "relative";
        span.style.display = "inline-block";
        span.style.transformStyle = "preserve-3d";
        mainText.appendChild(span);

        switch (char.toLowerCase()) {
            case "a":
                if (index === 0) {
                    gsap.from(span, {
                        duration: 1,
                        opacity: 0,
                        top: -100,
                        ease: "power4.out",
                    });
                } else if (index === 8) {
                    gsap.from(span, {
                        duration: 1,
                        opacity: 0,
                        top: 100,
                        ease: "power4.out",
                    });
                } else {
                    gsap.from(span, {
                        duration: 1,
                        opacity: 0,
                        left: 100,
                        ease: "power4.out",
                    });
                }
                break;
                case "i":
                gsap.from(span, {
                    opacity: 0,
                    scale: 0,
                    duration: 1,
                    rotateX: 360,
                    ease: "power1.inout",
                });
                break;
                case "r":
                    gsap.from(span, {
                    opacity: 0,
                    scale: 0,
                    duration: 1,
                    left: -60,
                    rotation: 360,
                    transformOrigin: "center center",
                    ease: "power1.inout",
                });
                break;
            case "s":
                gsap.from(span, {
                    opacity: 0,
                    duration: 2,
                    rotateY: 720,
                    ease: "power4.out",
                });
                break;
            case "h":
                gsap.from(span, {
                    opacity: 0,
                    duration: 1,
                    scale: 3,
                    ease: "power4.out",
                });
                break;
            default:
                gsap.from(span, {
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                });
                break;
        }
    });

    var subText = document.getElementById("introH2");
    subText.children[0].style.position = "relative";
    subText.children[2].style.position = "relative";
    gsap.to(subText.children[0], {
        duration: 1,
        top: -80,
        ease: "power4.out",
        delay: 0.6,
    });

    gsap.to(subText.children[2], {
        duration: 1,
        top: -80,
        ease: "power4.out",
        delay: 1,
    });
}

function introSectionCusrorFollower() {
    var introArea = document.getElementById("intro");
    var cursor = document.getElementById("cursor");
    
    introArea.addEventListener("mouseenter", () => {
        gsap.to(cursor,
            {
                scale: 1,
                duration: 0.2,
                ease: "power2.inOut"
            });
        });

    introArea.addEventListener("mouseleave", () => {
        gsap.to(cursor,
            {
                scale: 0,
                duration: 0.2,
                ease: "power2.inOut"
            });
    });

    introArea.addEventListener("mousemove", (e) => {
        gsap.to(cursor,
            {
                left: e.clientX,
                top: e.clientY,
                duration: 0.2,
            });
    });

    introArea.addEventListener("mousedown", (e) => {
        gsap.to(cursor,
            {
                scale: 0.8,
                duration: 0.1,
            });
    });

    introArea.addEventListener("mouseup", (e) => {
        gsap.to(cursor,
            {
                scale: 1,
                duration: 0.1,
            });
    });
}

function scrollTrigger_introSection() {
    var introSection = document.getElementById("intro");
    var heading1 = document.getElementById("introH1");
    var heading2 = document.getElementById("introH2");
    var downArrow = document.getElementById("lottie-container");
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            start: 0,
            end: () => window.innerHeight * 1.2,
            scrub: 0.6
        }
    });
    
    let headl = gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            start: 0,
            end: () => window.innerHeight * 1.2,
            scrub: 0.6
        }
    });
    headl.fromTo(heading1, {
        top: '20vw',
        yPercent: -80,
        scale: 1.7,
    }, {
        top: '0vw',
        yPercent: 0,
        scale: 1,
        duration: 0.8
    });

    gsap.to(heading2, {
        scrollTrigger: {
            trigger: introSection,
            start: "top 0",
            end: "+=200",
            scrub: 2,
        },
        y: -50,
        opacity: 0,
        duration: 1,
    });

    gsap.to(downArrow, {
        scrollTrigger: {
            trigger: introSection,
            start: "top 0",
            end: "+=1",
            scrub: 2,
        },
        scale: 0,
        duration: 1,
    });
}

function initialize() {
    if (!navigator.userAgentData.mobile) {
        introSectionCusrorFollower();
    }
    introSectionHeadings();
    downArrow();
    scrollTrigger_introSection();
}

initialize();