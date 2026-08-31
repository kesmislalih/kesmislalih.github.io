/* =========================
   KESMISLALIH TEMA SİSTEMİ
========================= */

const savedTheme = localStorage.getItem("kesmislalihTheme");

if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
}


/* =========================
   TEMA DEĞİŞTİR
========================= */

function toggleTheme() {

    document.documentElement.classList.toggle("light-mode");

    const isLight =
        document.documentElement.classList.contains("light-mode");

    localStorage.setItem(
        "kesmislalihTheme",
        isLight ? "light" : "dark"
    );

}


/* =========================
   TEMA BUTONU
========================= */

document.addEventListener("DOMContentLoaded", function() {

    const themeButton =
        document.getElementById("themeButton");

    if (themeButton) {

        themeButton.addEventListener(
            "click",
            toggleTheme
        );

    }

});
