const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () => {
    console.log("haha")
    console.log(links)
    links.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation = "";
        }else{
            link.style.animation = `fadeIn 0.5s ease forwards ${index/7+0.2}s`;
        }
    })

    navLinks.classList.toggle("open")

})