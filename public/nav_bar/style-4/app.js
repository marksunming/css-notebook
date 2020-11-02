function navFunc() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            const id = this.getAttribute("id");
            const activeLink = document.querySelector(`a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove("active"));
            activeLink.classList.add("active")
        })
    });
}

navFunc();