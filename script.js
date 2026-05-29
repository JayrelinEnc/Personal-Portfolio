// select my elements
let homeContent = document.getElementById("home-content");
let skills = document.getElementById("skills");
let education = document.getElementById("education");
let galleryWalk = document.getElementById("gallery");
let contact = document.getElementById("contact");




//functions
function selectHome(){
    homeContent.style.color = "#b74b4b"
}
function selectSkills(){
    skills.style.color = "#b74b4b"
}
function selectEducation(){
    education.style.color = "#b74b4b"
}
function selectGallery(){
    galleryWalk.style.color = "#b74b4b"
}
function selectContact(){
    contact.style.color = "#b74b4b"
}
    //eventListeners

    homeContent.addEventListener("click", selectHome);
    skills.addEventListener("click", selectSkills);
    education.addEventListener("click", selectEducation);
    galleryWalk.addEventListener("click", selectGallery);
    contact.addEventListener("click", selectContact);

