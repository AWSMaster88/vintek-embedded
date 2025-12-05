// ------------------
// DARK MODE TOGGLE
// ------------------
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Load theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// ------------------
// ANIMATED COUNTERS
// ------------------
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        }
    };
    updateCounter();
});

// ------------------
// FADE-UP ON SCROLL
// ------------------
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
    });
});

elements.forEach(el => observer.observe(el));
