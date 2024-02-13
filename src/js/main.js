
    const body = document.querySelector("body"),
        themeSwitch = body.querySelector("#toggle-switch");

    themeSwitch.addEventListener("click", () => {

        body.classList.toggle("dark");
        themeSwitch.classList.toggle("active");
        
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.body.classList.toggle('dark');
        });

    });

