document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector("body"),
        sideNav = body.querySelector(".side-nav"),
        toggle = body.querySelector(".toggle-area"),
        themeSwitch = body.querySelector(".toggle-switch"),
        toggleSwitchButton = body.querySelector(".toggle-switch-button");

    themeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        console.log(body, sideNav, toggle, themeSwitch, toggleSwitchButton);
    });
});
