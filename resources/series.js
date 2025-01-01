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
    "outlaws": "games.html#outlaws"

}

function KeypressListenerSearch(event) {
    if (event.keyCode === 13) {
        const searched_value = event.target.value.toLowerCase();
        if (mediaId[searched_value]) {
            window.location.href = mediaId[searched_value];
        } else {
            alert("Movie, series or game with the name \"" + event.target.value + "\" doesn't exist!")
        }
        
    }
}

window.onload = function() {
    const search = document.getElementById("search");
    search.addEventListener('keypress', KeypressListenerSearch);
}