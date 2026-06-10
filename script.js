 let homeContent = document.getElementById("home-content");
let skills = document.getElementById("skills");
let education = document.getElementById("education");
let galleryWalk = document.getElementById("gallery");
 let contact = document.getElementById("contact");
 function indicator() {
    const currentBookmark = window.location.hash;

    // Reset all colors
    homeContent.style.color = "";
    skills.style.color = "";
    education.style.color = "";
    galleryWalk.style.color = "";
    contact.style.color = "";

    switch (currentBookmark) {
        case "":
            homeContent.style.color = "#b74b4b";
            break;

        case "#Skills":
            skills.style.color = "#b74b4b";
            break;

        case "#Education":
            education.style.color = "#b74b4b";
            break;

        case "#galleryWalk":
            galleryWalk.style.color = "#b74b4b";
            break;

        case "#Contact":
            contact.style.color = "#b74b4b";
            break;

        default:
            homeContent.style.color = "#b74b4b";
    }

 }
window.addEventListener("DOMContentLoaded", indicator);
window.addEventListener("hashchange", indicator);


