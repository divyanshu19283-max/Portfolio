// =========================
// Smooth Scrolling (Only for menu links)
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// =========================
// Typing Animation
// =========================

const text = [
    "AI & Machine Learning Student",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Future AI Engineer"
];

let index = 0;
let char = 0;

function type() {

    if (char < text[index].length) {

        document.getElementById("typing").innerHTML += text[index].charAt(char);

        char++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (char > 0) {

        document.getElementById("typing").innerHTML =
            text[index].substring(0, char - 1);

        char--;

        setTimeout(erase, 50);

    } else {

        index++;

        if (index >= text.length) {
            index = 0;
        }

        setTimeout(type, 500);

    }

}

type();
document.getElementById("contact-form").addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_c69dwt4",
        "template_ntnrwy5",
        this
    )
    .then(function () {

        alert("✅ Message sent successfully!");

        document.getElementById("contact-form").reset();

    })
    .catch(function (error) {

        console.log("EmailJS Error:", error);

        alert("❌ Failed to send message.");

    });

});
