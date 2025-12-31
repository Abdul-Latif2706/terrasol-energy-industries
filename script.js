// Mobile menu
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Sticky navbar shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 20);
});

// Scroll animations
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

cards.forEach(card => observer.observe(card));

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `Website Contact from ${name}`;
    const body =
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A%0D%0A` +
        `Message:%0D%0A${message}`;

    window.location.href =
        `mailto:caleb.ampah@terrasolenergyindustries.com?subject=${subject}&body=${body}`;
});
