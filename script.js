if (localStorage["theme"]) {
    document.body.setAttribute("data-theme", localStorage["theme"]);
// Set system theme
} else if (window.matchMedia) { // check if browser supports function
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
    }
}

document.querySelector("#toggle-theme").onclick = function() {
    if (document.body.getAttribute("data-theme") === "light") {
        document.body.setAttribute("data-theme", "dark");
        localStorage["theme"] = "dark";
    } else {
        document.body.setAttribute("data-theme", "light");
        localStorage["theme"] = "light";
    }
}

const imageDialog = document.querySelector("#image-dialog");

document.querySelectorAll("img").forEach(imageElement => {
    imageElement.addEventListener("click", function() {
        imageDialog.querySelector("img").src = imageElement.src;
        imageDialog.querySelector("img").alt = imageElement.alt;
        imageDialog.showModal();
    });
});

imageDialog.querySelector("button").onclick = function() {
    imageDialog.close();
}