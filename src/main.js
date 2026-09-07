const API_KEY = import.meta.env.VITE_TREFLE_API_KEY


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


let plantsWithImage = []


fetch(`https://trefle.io/api/v1/plants?token=${API_KEY}`)
    .then(response => response.json())
    .then(data => {plantsWithImage = data.data.filter(plant => plant.image_url);
        get_show_plant();
    });


function get_show_plant (name=false) {
    if (!name) {
        name = plantsWithImage[Math.floor(Math.random() * plantsWithImage.length)].common_name; 
    };

    fetch(`https://trefle.io/api/v1/species/search?token=${API_KEY}&q=${encodeURIComponent(name)}`)
        .then(response => response.json())
        .then(data => {
            if (!data.data || data.data.length === 0) {
                document.querySelector(".common-name").innerHTML = "Plant not found";
                document.querySelector(".scientific-name").innerHTML = "Try another research";

                return;
            };

            const plant = data.data[0];

            document.querySelector(".common-name").innerHTML = plant.common_name
            document.querySelector(".scientific-name").innerHTML = plant.scientific_name
            document.querySelector(".img-show").src = plant.image_url;
        });
};

document.getElementById("btn-random").addEventListener("click", () => {
    get_show_plant();
});

document.getElementById("search-form").addEventListener("submit", (event) =>{
    event.preventDefault();

    const name = document.getElementById("tsearch").value.trim();
    console.log("SEARCH:", name);
    if (name !== "") {
        get_show_plant(name);
    };
});