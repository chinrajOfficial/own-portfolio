function homeMenu() {
    var blockMenu = document.getElementById('nav-contents');
    blockMenu.style.display = 'block';
}
function closeMenu() {
    var blockMenu = document.getElementById('nav-contents');
    blockMenu.style.display = 'none';
}

var typed = new Typed(".multiple-text", {
    strings: ["Chinraj CR", "Web Developer"],
    typeSpeed: 125,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
})
function downloadResume() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
    setTimeout(function() {
        const resumeUrl = './Assets/new_resume.pdf';
        const downloadLink = document.createElement("a");
        downloadLink.href = resumeUrl;
        downloadLink.download = 'Resume.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        loadingOverlay.style.display = 'none';
    }, 3000);
}
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;
    const start = window.pageYOffset;
    const distance = offsetTop - start;
    const duration = 1000;
    let startTime = null;
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    requestAnimationFrame(animation);
}