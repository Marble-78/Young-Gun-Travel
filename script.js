// Menu drop down 
const menuBtn = document.querySelector(".menu-btn");
const menuBlock = document.querySelector(".links-block");
const ul = document.querySelector("#links-list");
menuBtn.addEventListener("click", ()=> {
    menuBtn.classList.toggle("menu-btn-state");
    const menuHeight = menuBlock.getBoundingClientRect().height;
    const neededHeight = ul.getBoundingClientRect().height;
    if (menuHeight === 0) {
        menuBlock.style.height = `${neededHeight}px`;
        //menuBtn.classList.add("menu-btn-state");
    }
    else {
        menuBlock.style.height = "0px";
        //menuBtn.classList.remove("menu-btn-state");
    }
});
window.addEventListener('resize', ()=> {
    checkForWidth();
});
// Hide menu and make appropriate scroll
const pageLinks = document.querySelectorAll(".page-link");
pageLinks.forEach((link)=> {
    link.addEventListener("click", (e)=> {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const section = document.getElementById(id);
        const navHeight = document.querySelector(".navbar").getBoundingClientRect().height;
        const position = section.offsetTop - navHeight;
        window.scrollTo ({
            top: position,
        });
        checkForWidth();
    });
});
function checkForWidth () {
    menuBtn.classList.remove("menu-btn-state");
    const bodyWidth = document.querySelector("#body").getBoundingClientRect().width;
    if (bodyWidth > 1083) {
        menuBlock.style.height = "auto";
    }
    else {
        menuBlock.style.height = "0px";
    }
}
// Current year
window.onload = () => {
    const year = document.querySelector("#year");
    const currentYear = new Date().getUTCFullYear();
    year.textContent = currentYear;
}