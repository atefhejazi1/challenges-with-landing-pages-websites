// Check If There IS Local Storage Color Option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
    // console.log("Local Storage Is Not Empty You Can Set It On Root Now")
// Set Color In Root
    document.documentElement.style.setProperty("--main-color", mainColors);

    // Check For Active Class
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        // Add Active Class With Data-Color === Local Storage Item
        if (element.dataset.color === mainColors) {
            // Add Active Class
            element.classList.add("active");
        }
    })
}


//Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-cog").onclick = function () {
    // Toggle Class Fa-spin For Rotation On Self
    this.classList.toggle("fa-spin");
    document.querySelector(".settingsBox").classList.toggle("open");
}

// Switch Colors
const colorLi = document.querySelectorAll(".color-list li");
// Loop On ListItems
colorLi.forEach(li => {
    //Click In Every List Items
    li.addEventListener("click", (e) => {
        // Set Color In Root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        // Set Color In Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);


        // Remove Active Class From All Children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })

        e.target.classList.add("active");

    });
});


// Switch Background Option
const randomBackgroundEl = document.querySelectorAll(".random-background span");
// Loop On Spans
randomBackgroundEl.forEach(span => {
    //Click In Every Span
    span.addEventListener("click", (e) => {
        // Remove Active Class From All Children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        e.target.classList.add("active");

        // This Option Or Same Comment In After That The If Condtion
        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImg();

            localStorage.setItem("backgroundOption", true);
        } else {
            localStorage.setItem("backgroundOption", false);
            backgroundOption = false;
            clearInterval(theBackgroundInterval); /// Clear
        }


    });


});


// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];


// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval
let theBackgroundInterval;


// Function To Randomize Image
function randomizeImg() {
    if (backgroundOption === true) {
// Get Random Number
        theBackgroundInterval = setInterval(() => {
            // Change Background Image Url
            let randomNumber = Math.floor(Math.random() * imagesArray.length);
            landingPage.style.backgroundImage = 'url("images/' + imagesArray[randomNumber] + '")';
        }, 7000);
    }
}

// Check If There Is Local Storage Random Background Item

let backgroundLocalItem = localStorage.getItem("backgroundOption");

// Check If Random Background Local Storage Is Not Empty

if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === true) {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
// Remove Class Active From All Spans
    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });

    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        document.querySelector(".random-background .no").classList.add("active");
    }

}
/* The Same Meaning With After That IS */
// document.querySelector(".random-background span.no").addEventListener("click", function () {
//     backgroundOption = false;
//     clearInterval(theBackgroundInterval); /// Clear
// });
//
// document.querySelector(".random-background span.yes").onclick = function () {
//     backgroundOption = true;
//     randomizeImg();
//     // clearInterval(theBackgroundInterval);
// }
/* The Same Meaning With Before That IS */

// Function To Stop Random Background Option
randomizeImg();


// Select Skills Selector

let ourSkills = document.querySelector(".our-skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTOp = ourSkills.offsetTop;

    //Skills Outer  Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window Scroll Top
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTOp + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });

    }
}