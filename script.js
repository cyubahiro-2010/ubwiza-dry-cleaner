
// ==================================
// SMART DRY CLEANER JAVASCRIPT
// ==================================


// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});


// CLOSE MENU WHEN LINK IS CLICKED

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// 2. DARK MODE / LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.className = "fa-solid fa-sun";

    } else {

        icon.className = "fa-solid fa-moon";

    }

});


// 3. INTERACTIVE LAUNDRY ESTIMATOR

const serviceType = document.getElementById("serviceType");
const itemCount = document.getElementById("itemCount");
const estimateResult = document.getElementById("estimateResult");

function updateEstimator() {

    let count = Number(itemCount.value);

    if (!Number.isFinite(count) || count < 1) {
        count = 1;
    }

    count = Math.min(100, Math.floor(count));

    itemCount.value = count;

    estimateResult.textContent =
        count + (count === 1 ? " item" : " items");

}

itemCount.addEventListener("input", updateEstimator);
serviceType.addEventListener("change", updateEstimator);


// 4. TOAST NOTIFICATION

const toast = document.getElementById("toast");

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function() {

        toast.classList.remove("show");

    }, 3000);

}


// 5. PREPARE LAUNDRY REQUEST

const prepareBtn = document.getElementById("prepareBtn");

prepareBtn.addEventListener("click", function() {

    const service = serviceType.value;

    const quantity = itemCount.value;

    showToast(
        "Request preview: " + service +
        " - " + quantity + " items. Contact us to confirm."
    );

});


// 6. BACK TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// 7. FAQ ACCORDION

const faqItems = document.querySelectorAll(".faq details");

faqItems.forEach(function(item) {

    item.addEventListener("toggle", function() {

        if (item.open) {

            faqItems.forEach(function(otherItem) {

                if (otherItem !== item) {

                    otherItem.open = false;

                }

            });

        }

    });

});


// 8. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".service-card, .process-card, .about-content, .about-image, .gallery-grid img"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// 9. INITIALIZE

updateEstimator();

console.log("SMART DRY CLEANER website loaded successfully!");
