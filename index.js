document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealOnScroll);

    function revealOnScroll() {
        var sections = document.querySelectorAll('.section');

        sections.forEach(function (section) {
            var sectionPosition = section.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add('show');
            }
        });
    }
});
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes} ${ampm}`;

document.getElementById('clock').textContent = time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();