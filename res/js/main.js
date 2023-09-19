const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

// .onclick na kliknutí
// () => {} arrow fce

let numberOfCookies = 0;

cookie.onclick = () => {
    numberOfCookies++;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Headshots: ${numberOfCookies}`;
    if(!cookie.classList.contains("scale")) {
        cookie.classList.add("scale");
        document.getElementById("dmg").style.visibility = "visible";
        document.getElementById("skin").style.visibility = "hidden";
        setTimeout(remove, 300);
    }
}

function remove() {
    cookie.classList.remove("scale");
    document.getElementById("dmg").style.visibility = "hidden";
    document.getElementById("skin").style.visibility = "visible";
}