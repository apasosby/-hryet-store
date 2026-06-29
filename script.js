
document.addEventListener("DOMContentLoaded", () => {

    const particles = document.getElementById("particles");

    for (let i = 0; i < 80; i++) {

        const dot = document.createElement("div");

        dot.className = "particle";

        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";

        dot.style.animationDelay = (Math.random() * 8) + "s";

        particles.appendChild(dot);

    }

});
