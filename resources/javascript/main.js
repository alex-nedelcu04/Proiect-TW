const mediaId = {
    "introduction": "main.html",
    "movies": "movies.html",
    "the prequel trilogy": "movies.html#prequel-trilogy",
    "episode i": "movies.html#episode1",
    "episode 1": "movies.html#episode1",
    "the phantom menace": "movies.html#episode1",
    "episode ii": "movies.html#episode2",
    "episode 2": "movies.html#episode2",
    "attack of the clones": "movies.html#episode2",
    "episode iii": "movies.html#episode3",
    "episode 3": "movies.html#episode3",
    "revenge of the sith": "movies.html#episode3",
    "the original trilogy": "movies.html#original-trilogy",
    "episode iv": "movies.html#episode4",
    "episode 4": "movies.html#episode4",
    "a new hope": "movies.html#episode4",
    "episode v": "movies.html#episode5",
    "episode 5": "movies.html#episode5",
    "the empire strikes back": "movies.html#episode5",
    "episode vi": "movies.html#episode6",
    "episode 6": "movies.html#episode6",
    "return of the jedi": "movies.html#episode6",
    "the sequel trilogy": "movies.html#sequel-trilogy",
    "episode vii": "movies.html#episode7",
    "episode 7": "movies.html#episode7",
    "the force awakens": "movies.html#episode7",
    "episode viii": "movies.html#episode8",
    "episode 8": "movies.html#episode8",
    "The Last Jedi": "movies.html#episode8",
    "episode ix": "movies.html#episode9",
    "episode 9": "movies.html#episode9",
    "the rise of skywalker": "movies.html#episode9",
    "anthology movies": "movies.html#anthology-movies",
    "rogue one": "movies.html#rogue-one",
    "solo": "movies.html#solo",
    "series": "series.html",
    "the clone wars": "series.html#clone-wars",
    "clone wars": "series.html#clone-wars",
    "rebels": "series.html#rebels",
    "the mandalorian": "series.html#the-mandalorian",
    "the bad batch": "series.html#bad-batch",
    "the book of boba fett": "series.html#book-of-boba-fett",
    "boba fett": "series.html#book-of-boba-fett",
    "obi-wan kenobi": "series.html#kenobi",
    "kenobi": "series.html#kenobi",
    "andor": "series.html#andor",
    "ahsoka": "series.html#ahsoka",
    "the acolyte": "series.html#the-acolyte",
    "games": "games.html",
    "jedi: fallen order": "games.html#fallen-order",
    "jedi: survivor": "games.html#survivor",
    "battlefront": "games.html#battlefront",
    "battlefront i": "games.html#battlefront",
    "battlefront ii": "games.html#battlefront",
    "outlaws": "games.html#outlaws",
    "galaxy's choice": "sw-form.html",
    "form": "sw-form.html"

}

function keypressListenerSearch(event) {
    if (event.keyCode === 13) {
        const searched_value = event.target.value.toLowerCase();
        if (mediaId[searched_value]) {
            window.location.href = mediaId[searched_value];
        } else {
            alert("Movie, series or game with the name \"" + event.target.value + "\" doesn't exist!")
        }
        
    }
}


function changeColor(old_color, new_color) {

    const all_elem = document.querySelectorAll("*");
    all_elem.forEach((crt) => {
    
        let computed_style = window.getComputedStyle(crt);

        let crt_color = computed_style.color;
        if (crt_color === old_color) {
            crt.style.color = new_color;
        }

        let crt_bg_color = computed_style.backgroundColor;
        if (crt_bg_color === old_color) {
            crt.style.backgroundColor = new_color;
        }

        let crt_bg = computed_style.background;
        if (crt_bg_color === old_color) {
            crt.style.background = new_color;
        }

        let crt_border_color = computed_style.borderColor;
        if (crt_border_color === old_color) {
            crt.style.borderColor = new_color;
        }

        let crt_fill = computed_style.fill;
        if (crt_fill === old_color) {
            crt.style.fill = new_color;
        }

        let crt_stroke = computed_style.stroke;
        if (crt_stroke === old_color) {
            crt.style.stroke = new_color;
        }
    });

}

function populateStorage() {
    var old_color = localStorage.getItem("main-style-color");
    if (old_color) {
        localStorage.setItem("main-style-old-color", old_color);
    }
    localStorage.setItem("main-style-color", document.getElementById("main-style-color").value);
    setStyle();
}

function hex2rgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
}

function setStyle() {
    let new_color = localStorage.getItem("main-style-color") || "#ffe81f";
    document.getElementById("main-style-color").value = new_color;

    let old_color = localStorage.getItem("main-style-old-color") || "#ffe81f";
    
    console.log(old_color);
    console.log(new_color);
    changeColor(hex2rgb(old_color), hex2rgb(new_color));
}

function randomColor() {
    const hex_characters = '0123456789ABCDEF';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += hex_characters.charAt(Math.floor(Math.random() * 16));
    }
    return "#"+ result;

}


function changeToRandomColor() {
    // populateStorage

    var old_color = localStorage.getItem("main-style-color");
    if (old_color) {
        localStorage.setItem("main-style-old-color", old_color);
    }

    localStorage.setItem("main-style-color", randomColor());

    // setStyle

    let new_color = localStorage.getItem("main-style-color");
    document.getElementById("main-style-color").value = new_color;

    old_color = localStorage.getItem("main-style-old-color");
    

    changeColor(hex2rgb(old_color), hex2rgb(new_color));
}

function changeToDefaultColor() {
    // populateStorage

    var old_color = localStorage.getItem("main-style-color");
    if (old_color) {
        localStorage.setItem("main-style-old-color", old_color);
    }

    localStorage.setItem("main-style-color", "#ffe81f");

    // setStyle

    let new_color = localStorage.getItem("main-style-color");
    document.getElementById("main-style-color").value = new_color;

    old_color = localStorage.getItem("main-style-old-color");

    changeColor(hex2rgb(old_color), hex2rgb(new_color));
}
// Change main color for navbar

function changeNavbarSectionColor() {
    

    const sections = document.querySelectorAll(".dropdown-menu ul li a");

    sections.forEach((section) => {
    
        section.parentElement.addEventListener("mouseover", () => {
            section.style.background = localStorage.getItem("main-style-color");
            section.style.color = "black";
        });
        section.parentElement.addEventListener("mouseout", () => {
            section.style.background = ""; 
            section.style.color = "";
        });
    });
    
   changeNavbarSubsectionColor();
}

function changeNavbarSubsectionColor() {
    

    const subsections = document.querySelectorAll(".dropdown-menu ul ul li a");

    subsections.forEach((subsection) => {

        subsection.style.background = localStorage.getItem("main-style-color"); 
        subsection.style.color = "black";
    
        subsection.parentElement.addEventListener("mouseover", () => {
            subsection.style.background = "#262626";
            subsection.style.color = "white";

        });
        subsection.parentElement.addEventListener("mouseout", () => {
            subsection.style.background = localStorage.getItem("main-style-color"); 
            subsection.style.color = "black";
        });
    });
}

// Change main color for hovering actor names

function changeCastHoverColor() {

    const actors = document.querySelectorAll(".actor-name");

    actors.forEach((actor) => {
    
        actor.parentElement.addEventListener("mouseover", () => {
            actor.style.color = localStorage.getItem("main-style-color");

        });

        actor.parentElement.addEventListener("mouseout", () => {
            actor.style.color = "";
        });
    });
}


// Star Ratings

if (!localStorage.getItem("rating"))
    localStorage.setItem("rating", 0);

function rating_change(n) {

    let loaded_stars = Number(localStorage.getItem("are-stars-loaded"));
    let rating = Number(localStorage.getItem("rating"));
    console.log(loaded_stars);

    if (rating === n && loaded_stars) {
        localStorage.setItem("rating", n-1);
        let crt_star = document.getElementById("star" + n);
        crt_star.style.fill = "#000000";

        // modificare text

        rating_value = document.getElementById("rating-value");
        rating_value.textContent = "You rated your experience: "+ (n-1) + "/5★";

    } else {
        localStorage.setItem("rating", n);
        
        // modificare text

        rating_value = document.getElementById("rating-value");
        rating_value.textContent = "You rated your experience: "+ n + "/5★";

        // schimbare numar stele umplute

        for (let i = 1; i <= n; i++) {

            let crt_star = document.getElementById("star" + i);
            
            let star = document.querySelector(".star");
            let stroke_color = window.getComputedStyle(star).stroke;
            crt_star.style.fill = stroke_color;
           
        }

        for (let i = n+1; i <= 5; i++) {
            let crt_star = document.getElementById("star" + i);
            crt_star.style.fill = "#000000";
        }

        localStorage.setItem("are-stars-loaded", 1);
    }
   
}

window.onload = function() {
    // Search

    const search = document.getElementById("search");
    search.addEventListener('keypress', keypressListenerSearch);
    
    
}

document.addEventListener("DOMContentLoaded", (event) => {
    // Change color

    if (!localStorage.getItem("main-style-color")) {
        localStorage.setItem("main-style-color", "#ffe81f");
        localStorage.setItem("main-style-old-color", "#ffe81f");
    }
    
    let mainPageColor = document.getElementById('main-style-color');
    if (!localStorage.getItem("main-style-color")) {
        populateStorage();
    } else {
        setStyle();
    } 
    mainPageColor.onchange = populateStorage;
   
    const random_color = document.getElementById("random-color-button");
    random_color.addEventListener("click", changeToRandomColor);

    const default_color = document.getElementById("default-color-button");
    default_color.addEventListener("click", changeToDefaultColor);

    changeColor(hex2rgb("#ffe81f"), hex2rgb(localStorage.getItem("main-style-color")));
    changeNavbarSectionColor();
    changeCastHoverColor();

    // Star ratings
    const star1 =  document.getElementById("star1");
    star1.addEventListener("click", () => rating_change(1));

    const star2 =  document.getElementById("star2");
    star2.addEventListener("click", () => rating_change(2));

    const star3 =  document.getElementById("star3");
    star3.addEventListener("click", () => rating_change(3));

    const star4 =  document.getElementById("star4");
    star4.addEventListener("click", () => rating_change(4));

    const star5 =  document.getElementById("star5");
    star5.addEventListener("click", () => rating_change(5));


    localStorage.setItem("are-stars-loaded", 0);
    rating_change(localStorage.getItem("rating"));

    // JSON login


    localStorage.setItem("logged_in", "false");
    const promiseFetch = fetch("http://localhost:8000//resources/json/login.json");

    promiseFetch
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.text();
        })
        .then(function (text) {
            const responseObject = JSON.parse(text);
            console.log(responseObject);

            const username_input = document.getElementById("username");
            const password_input = document.getElementById("password");
            const login_button = document.getElementById("login-submit");

            const users = responseObject.users;

            login_button.addEventListener("click", (event) => {
                event.preventDefault();

                if (localStorage.getItem("logged_in") === "true") {
                    alert(`User ${localStorage.getItem("username_active")} is already logged in!`);
                } else {
                    const username_crt_value = username_input.value;
                    const password_crt_value = password_input.value;

                    console.log(username_crt_value, password_crt_value);

                    let ok = false;
                    users.forEach((user) => {
                        if (user.username === username_crt_value && user.password === password_crt_value) {
                            localStorage.setItem("logged_in", "true");
                            localStorage.setItem("username_active", username_crt_value);
                            alert(`Successful login! Welcome ${username_crt_value}!`);
                            ok = true;
                        }
                    });

                    if (!ok) {
                        localStorage.setItem("logged_in", "false");
                        alert(`Wrong username or password!`);
                    }
                }
            });

            const logout_button = document.getElementById("logout-submit");

            logout_button.addEventListener("click", (event) => {
                event.preventDefault();

                if (localStorage.getItem("logged_in") === "true") {
                    alert(`User ${localStorage.getItem("username_active")} logged out!`);
                    localStorage.setItem("logged_in", "false");
                    username_input.value = "";
                    password_input.value = "";
                } else {
                    alert(`There is no user logged in!`);
                }
            });
        })
        .catch(function (err) {
            alert(err);
        });


    });

