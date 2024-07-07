
function introSectionCusrorFollower() {
    var introArea = document.getElementById("intro");
    var cursor = document.getElementById("cursor");

    introArea.addEventListener("mouseenter", () => {
        gsap.to("#cursor",
            {
                scale: 1,
                duration: 0.2,
                ease: "power2.inOut"
            });
    });

    introArea.addEventListener("mouseleave", () => {
        gsap.to("#cursor",
            {
                scale: 0,
                duration: 0.2,
                ease: "power2.inOut"
            });
    });

    introArea.addEventListener("mousemove", (e) => {
        gsap.to("#cursor",
            {
                left: e.clientX,
                top: e.clientY,
                duration: 0.2,
            });
    });

    introArea.addEventListener("mousedown", (e) => {
        gsap.to("#cursor",
            {
                scale: 0.8,
                duration: 0.1,
            });
    });

    introArea.addEventListener("mouseup", (e) => {
        gsap.to("#cursor",
            {
                scale: 1,
                duration: 0.1,
            });
    });
}
introSectionCusrorFollower();

