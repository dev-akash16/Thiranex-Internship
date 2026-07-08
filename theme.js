const themeButton = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

themeButton.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙";

    } else {

        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️";

    }

});