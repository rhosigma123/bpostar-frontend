


// navbar start
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const abc = document.querySelector(".navbar-btn");

hamburger.addEventListener('click', () => {

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });


    hamburger.classList.toggle("toggle");
    abc.style.display = 'block';
});


// navbar end

// onclick open start

// document.addEventListener("DOMContentLoaded", function () {
//     const contentItems = document.querySelectorAll(".business-features__content");
//     const mainContentItems = document.querySelectorAll(".business-features__main-content");

//     contentItems.forEach((contentItem, index) => {
//         contentItem.addEventListener("click", () => {
//             contentItems.forEach((item) => {
//                 item.style.backgroundColor = "";
//                 item.style.color = "";
//             });

//             contentItem.style.backgroundColor = "var(--primary-color)";
//             contentItem.style.color = "white";

//             mainContentItems.forEach((mainContentItem) => {
//                 mainContentItem.style.display = "none";
//             });

//             mainContentItems[index].style.display = "grid";
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const contentItems = document.querySelectorAll(".business-features__content");
    const mainContentItems = document.querySelectorAll(".business-features__main-content");

    // Initially, open the first mainContentItem and set the background color of the first contentItem
    mainContentItems[0].style.display = "grid";
    contentItems[0].style.backgroundColor = "var(--primary-color)";
    contentItems[0].style.color = "white";

    contentItems.forEach((contentItem, index) => {
        contentItem.addEventListener("click", () => {
            // Reset background color for all content items
            contentItems.forEach((item) => {
                item.style.backgroundColor = "var(--bg-color)";
                item.style.color = "black";
            });

            // Set the background color for the clicked content item
            contentItem.style.backgroundColor = "var(--primary-color)";
            contentItem.style.color = "white";

            // Hide all mainContentItems
            mainContentItems.forEach((mainContentItem) => {
                mainContentItem.style.display = "none";
            });

            // Display the corresponding mainContentItem
            mainContentItems[index].style.display = "grid";
        });
    });
});


// onclick open End


// faq start

var acc = document.getElementsByClassName("accordion");
var i;

// Initially, open the first accordion
acc[0].classList.add("active");
acc[0].nextElementSibling.style.display = "block";
acc[0].querySelector("svg").style.transform = "rotate(-90deg)";

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var isActive = this.classList.contains("active");

        // Close all accordions first
        for (var j = 0; j < acc.length; j++) {
            acc[j].classList.remove("active");
            acc[j].nextElementSibling.style.display = "none";
            acc[j].querySelector("svg").style.transform = "rotate(0deg)";
        }

        if (!isActive) {
            // Open the clicked accordion
            this.classList.add("active");
            panel.style.display = "block";
            this.querySelector("svg").style.transform = "rotate(-90deg)";
            this.querySelector("svg").style.transition = "0.3s ease-in-out";
        }
    });
}

// faq End






// HOVER SCRIPT START

const headings = document.querySelectorAll('.service-global-card__heading');
    
headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
        document.querySelector('.service-global-card__heading.always-open').classList.remove('always-open');
        heading.classList.add('always-open');
    });
});


// HOVER SCRIPT END














// service l1 page start
document.addEventListener("DOMContentLoaded", function () {
   
    const sets = document.querySelectorAll(".service-l1-main-details");

    sets.forEach(set => {
        const contentItems = set.querySelectorAll(".service-l1-main__content");
        const mainContentItems = set.querySelectorAll(".service-l1-main__main-content");

       
        mainContentItems[0].style.display = "grid";
        contentItems[0].style.backgroundColor = "var(--primary-color)";
        contentItems[0].style.color = "white";

        contentItems.forEach((contentItem, index) => {
            contentItem.addEventListener("click", () => {
               
                contentItems.forEach((item) => {
                    item.style.backgroundColor = "var(--bg-color)";
                    item.style.color = "black";
                });

               
                contentItem.style.backgroundColor = "var(--primary-color)";
                contentItem.style.color = "white";

                
                mainContentItems.forEach((mainContentItem) => {
                    mainContentItem.style.display = "none";
                });

                
                mainContentItems[index].style.display = "grid";
            });
        });
    });
});
// service l1 page end


// service scroller start


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {


    let scrollY = window.pageYOffset;


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");


        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

// service scroller end


