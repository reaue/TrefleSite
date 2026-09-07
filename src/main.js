let darkmode = localStorage.getItem('darkmode') === "active";
const themeSwitch = document.getElementById("theme-switch");


const enableDarkmode = () => {
    document.documentElement.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
    darkmode = true;
};

const disableDarkmode = () => {
    document.documentElement.classList.remove("darkmode");
    localStorage.setItem("darkmode", "inactive");
    darkmode = false;
};

if (darkmode) enableDarkmode()

themeSwitch.addEventListener("click", () =>{
    darkmode ? disableDarkmode() : enableDarkmode();
});