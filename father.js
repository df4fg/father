function copyCode(event) {
    const codeElement = event.target;
    const code = codeElement.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const notification = codeElement.nextElementSibling;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }).catch(err => {
        console.error('فشل النسخ:', err);
    });
}




let wall = document.querySelector(".wall");
wall.onscroll = function () {
    toggleScrollButton();
};

function toggleScrollButton() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (wall.scrollTop > 100) { 
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    wall.scrollTo({ top: 0, behavior: "smooth" });
}
