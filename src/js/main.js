
    const body = document.querySelector("body"),
        themeSwitch = body.querySelector("#toggle-switch");

    themeSwitch.addEventListener("click", () => {

        body.classList.toggle("dark");
        themeSwitch.classList.toggle("active");
        

    });

